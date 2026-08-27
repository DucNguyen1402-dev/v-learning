import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { ENTITIES } from "@shared/domain";
import * as execution from "@shared/execution";
import { Loading, Modal, Toast } from "@shared/overlays";

import { createMovieFormData } from "@features/admin/movies/add/utils";

import { useAddCourseMutation } from "./useAddCourseMutation";
import { useAddForm } from "./useAddForm";

export function useAddCourseActions() {
  const [imgPreview, setImgPreview] = useState("");

  const location = useLocation();
  const history = location.state?.history ?? [];
  const previousPath = history.at(-1) ?? "/admin/movies";
  const navigate = useNavigate();

  const { loader } = Loading.use();
  const toaster = Toast.use();
  const modalApi = Modal.use();

  const { register, handleSubmit, errors, isDirty, control, watch } =
    useAddForm();

  const { mutateAsync } = useAddCourseMutation();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => setImgPreview(e.target.result);
    }
  };

  const handleCancelClick = () =>
    navigate(previousPath, { state: { history: history.slice(0, -1) } });
  const onCancelClick = () =>
    modalApi.open({
      ...Modal.config.unsavedChanges(ENTITIES.movie),
      onConfirm: handleCancelClick,
    });

  const onValid = (data) =>
    modalApi.open({
      ...Modal.config.add(ENTITIES.movie),
      onConfirm: () => handleSubmitNewMovie(data),
    });

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    handleSubmit(onValid)();
  };

  const handleSubmitNewMovie = async (data) => {
    const submitNewMovieTask = async () => {
      const formData = createMovieFormData(data);
      return await mutateAsync(formData);
    };

    try {
      const response = await execution.runWithLoading(
        submitNewMovieTask,
        loader,
      );

      navigate(previousPath, {
        state: {
          movieId: response.data?.content?.maPhim,
          toastState: Toast.config.success.add(ENTITIES.movie),
          history,
        },
      });
    } catch (error) {
      console.log("throw:", error?.message);
      const content = error.response?.data?.content;
      // Chỗ này có vẻ là do tên phim bị trùng nhưng content trả về tử backend không rõ ràng
      // mình fix tạm
      const message =
        content === "Upload file không thành công!"
          ? "Tên phim đã tồn tại"
          : content;
      toaster.show(Toast.config.error(message));
    }
  };

  return {
    register,
    handleSubmitEvent,
    errors,
    handleFileChange,
    imgPreview,
    onCancelClick,
    watch,
    control,
    isDirty,
  };
}
