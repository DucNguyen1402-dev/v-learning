import { useState } from "react";

import { useCancelPersonalCourseMutation } from "@modules/personal-courses";
import { Modal } from "@shared/overlays";
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

  const [isCanceling, setIsCanceling] = useState(false);
  const {
    mutation: cancelPersonalCourseMutation,
    isLoading: isCancelPersonalCourseLoading,
  } = useCancelPersonalCourseMutation([
    "pendingEnrollmentCourses",
    "enrolledCourses",
  ]);

  const cancelCourse = async () => {
    const payload = {
      maKhoaHoc,
      taiKhoan,
    };
    await cancelPersonalCourseMutation(payload);
    setIsCanceling(false);
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
