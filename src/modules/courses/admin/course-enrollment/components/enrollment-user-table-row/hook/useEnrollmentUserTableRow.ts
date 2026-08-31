import { useState } from "react";

import { useCancelPersonalCourseMutation } from "@modules/personal-courses";
import { getErrorMessage } from "@shared/error";
import { Modal, Toast } from "@shared/overlays";
type UseEnrollmentUserTableRowParams = {
  maKhoaHoc: string;
  taiKhoan: string;
};
export const useEnrollmentUserTableRow = ({
  maKhoaHoc,
  taiKhoan,
}: UseEnrollmentUserTableRowParams) => {
  const modal = Modal.use();
  const toast = Toast.use();

  const [isCanceling, setIsCanceling] = useState(false);
  const {
    mutation: cancelPersonalCourseMutation,
    isLoading: isCancelPersonalCourseLoading,
  } = useCancelPersonalCourseMutation([
    "enrolledUsers",
    "pendingEnrollmentUsers",
  ]);

  const cancelCourse = async () => {
    const payload = {
      maKhoaHoc,
      taiKhoan,
    };
    try {
      await cancelPersonalCourseMutation(payload);
      toast.show(Toast.config.success.cancelUserEnrollment());
    } catch (error) {
      toast.show(Toast.config.error(getErrorMessage({ error })));
    }
    setIsCanceling(false);
  };

  const onCancelCourseClick = () => {
    setIsCanceling(true);
    modal.open({
      ...Modal.config.cancelUserEnrollment(taiKhoan),
      onConfirm: cancelCourse,
      onCancel: () => setIsCanceling(false),
    });
  };
  return {
    onCancelCourseClick,
    isCancelPersonalCourseLoading,
    isCanceling,
  };
};
