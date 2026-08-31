import { useEffect, useState } from "react";

import {
  createCourseImagePayload,
  createCoursePayload,
} from "@modules/courses/admin/shared/helpers";
import { useCourseImageMutation } from "@modules/courses/admin/shared/hooks";
import type { CourseFormData } from "@modules/courses/admin/shared/types";
import type { Course } from "@modules/courses/shared/types";
import { ENTITIES } from "@shared/domain";
import { getErrorMessage } from "@shared/error";
import { execution } from "@shared/execution";
import { Navigation } from "@shared/navigation";
import { Loading, Modal, Toast } from "@shared/overlays";
import { getFileNameFromUrl } from "@shared/utils";

import type { UseEditCourseFormReturn } from "./useEditCourseForm";
import { useUpdateCourseMutation } from "./useUpdateCourseMutation";

import { UserProfile } from "@/shared/user-profile";

type UseEditCourseActionsProps = {
  isDirty: boolean;
  handleSubmit: UseEditCourseFormReturn["handleSubmit"];

  editCourse: Course;
};

export function useEditCourseActions({
  isDirty,
  handleSubmit,
  editCourse,
}: UseEditCourseActionsProps) {
  const [imgPreview, setImgPreview] = useState<string>("");

  useEffect(() => {
    if (!editCourse.hinhAnh) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setImgPreview(editCourse.hinhAnh);
  }, [editCourse.hinhAnh]);
  const { profile } = UserProfile.use();
  const { go, back } = Navigation.hooks.useNavigate();
  const { loader } = Loading.use();
  const toaster = Toast.use();
  const modalApi = Modal.use();

  const { mutateAsync } = useUpdateCourseMutation();
  const { mutateAsync: mutateAsyncUpdateImage } = useCourseImageMutation();

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

  const onValid = (data: CourseFormData) =>
    modalApi.open({
      ...Modal.config.update(ENTITIES.COURSE),
      onConfirm: () => handleSubmitNewCourse(data),
    });

  const handleSubmitEvent = () => void handleSubmit(onValid)();

  const handleSubmitNewCourse = async (data: CourseFormData) => {
    const payload = createCoursePayload({ data, courseSourse: editCourse });
    const hasUpdatedImage = !!payload.hinhAnh;

    if (!hasUpdatedImage) {
      payload.hinhAnh = getFileNameFromUrl(editCourse.hinhAnh);
    }

    const formData = hasUpdatedImage
      ? createCourseImagePayload(data)
      : undefined;

    const submitNewCourseTask = () =>
      mutateAsync({ ...payload, taiKhoanNguoiTao: profile.taiKhoan });

    try {
      await execution.runAsyncTask(submitNewCourseTask, loader);
      if (formData) {
        await execution.runAsyncTask(
          () => mutateAsyncUpdateImage(formData),
          loader,
        );
      }
      go(Navigation.admin.keys.COURSES, "admin", {
        toastState: Toast.config.success.update(ENTITIES.COURSE),
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
    handleSubmitEvent,
    handleFileChange,
    imgPreview,
    onCancelClick,
    isDirty,
  };
}
