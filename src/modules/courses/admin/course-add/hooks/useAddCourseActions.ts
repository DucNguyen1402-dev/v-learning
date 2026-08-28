import { useState } from "react";

import { ENTITIES } from "@shared/domain";
import { getErrorMessage } from "@shared/error";
import { execution } from "@shared/execution";
import { Navigation } from "@shared/navigation";
import { Loading, Modal, Toast } from "@shared/overlays";

import type { AddCourseFormData } from "../types";
import {
  createAddCoursePayload,
  createUpdateCourseImageFormData,
} from "./helpers";
import { useAddCourseMutation } from "./useAddCourseMutation";
import { useAddForm } from "./useAddForm";
import { useUpdateCourseImageMutation } from "./useUpdateCourseImageMutation";

import { UserProfile } from "@/shared/user-profile";

export function useAddCourseActions() {
  const [imgPreview, setImgPreview] = useState<string>("");

  const { profile } = UserProfile.use();
  const { go, back } = Navigation.hooks.useNavigate();
  const { loader } = Loading.use();
  const toaster = Toast.use();
  const modalApi = Modal.use();

  const { register, handleSubmit, errors, isDirty, control, watch } =
    useAddForm();

  const { mutateAsync } = useAddCourseMutation();
  const { mutateAsync: mutateAsyncUpdateImage } =
    useUpdateCourseImageMutation();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = ({ target }) => {
      if (typeof target?.result === "string") {
        setImgPreview(target.result);
      }
    };

    reader.readAsDataURL(file);
  };

  const onCancelClick = () => {
    if (isDirty) {
      console.log("isDirty", isDirty);
      modalApi.open({
        ...Modal.config.unsavedChanges(ENTITIES.COURSE),
        onConfirm: () => back(),
      });
      return;
    }
    back();
  };

  const onValid = (data: AddCourseFormData) =>
    modalApi.open({
      ...Modal.config.add(ENTITIES.COURSE),
      onConfirm: () => handleSubmitNewCourse(data),
    });

  const handleSubmitEvent = () => void handleSubmit(onValid)();

  const handleSubmitNewCourse = async (data: AddCourseFormData) => {
    const payload = createAddCoursePayload(data);
    const formData = createUpdateCourseImageFormData(data);
    const submitNewCourseTask = () =>
      mutateAsync({ ...payload, taiKhoanNguoiTao: profile.taiKhoan });

    try {
      await execution.runAsyncTask(submitNewCourseTask, loader);
      await execution.runAsyncTask(
        () => mutateAsyncUpdateImage(formData),
        loader,
      );

      go(Navigation.admin.keys.COURSES, {
        toastState: Toast.config.success.add(ENTITIES.COURSE),
        maKhoaHoc: payload.maKhoaHoc,
      });
    } catch (error) {
      toaster.show(
        Toast.config.error(
          getErrorMessage({
            error,
            messageForInternalSeverError:
              "Tên khóa học đã tồn tại. Vui lòng chọn tên khác.",
          }),
        ),
      );
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
