import { useState } from "react";

import { useCancelPersonalCourseMutation } from "@modules/courses/shared/hooks";
import { getErrorMessage } from "@shared/error";
import { Modal, Toast } from "@shared/overlays";
type UseCancelEnrolledCourseParams = {
  maKhoaHoc: string;
  taiKhoan: string;
  tenKhoaHoc: string;
};
export const useCancelEnrolledCourse = ({
  maKhoaHoc,
  taiKhoan,
  tenKhoaHoc,
}: UseCancelEnrolledCourseParams) => {
  const modal = Modal.use();
  const toast = Toast.use();

  const [isCanceling, setIsCanceling] = useState(false);
  const {
    mutation: cancelPersonalCourseMutation,
    isLoading: isCancelPersonalCourseLoading,
  } = useCancelPersonalCourseMutation({
    invalidateQueryKeys: ["pendingEnrollmentCourses", "enrolledCourses"],
  });

  const cancelCourse = async () => {
    const payload = {
      maKhoaHoc,
      taiKhoan,
    };
    try {
      await cancelPersonalCourseMutation(payload);
      toast.show(Toast.config.success.cancelCourse());
    } catch (error) {
      toast.show(Toast.config.error(getErrorMessage({ error })));
    } finally {
      setIsCanceling(false);
    }
  };

  const onCancelCourseClick = () => {
    setIsCanceling(true);
    modal.open({
      ...Modal.config.cancelCourseEnrollment(tenKhoaHoc),
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
