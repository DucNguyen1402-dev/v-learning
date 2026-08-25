import { useState } from "react";

import { useCancelCourseEnrollment } from "./useCancelCourseEnrollment";

export const usePersonalCourseDetail = ({
  maKhoaHoc,
}: {
  maKhoaHoc: string;
}) => {
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const { handleCancelCourse, isCancelCourseLoading } =
    useCancelCourseEnrollment({ maKhoaHoc });

  const handleOpenCancelModal = () => {
    setIsCancelModalOpen(true);
  };

  const handleModalConfirm = () => {
    handleCancelCourse();
    setIsCancelModalOpen(false);
  };
  return {
    isCancelModalOpen,
    setIsCancelModalOpen,
    handleOpenCancelModal,
    handleCancelCourse,
    isCancelCourseLoading,
    handleModalConfirm,
  };
};

export type UsePersonalCourseDetailReturn = ReturnType<
  typeof usePersonalCourseDetail
>;
