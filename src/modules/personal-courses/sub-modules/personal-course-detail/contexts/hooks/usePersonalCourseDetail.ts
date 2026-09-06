import { useState } from "react";

import { useCancelCourseEnrollment } from "./useCancelCourseEnrollment";

export const usePersonalCourseDetail = ({
  maKhoaHoc,
}: {
  maKhoaHoc: string;
}) => {
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);

  const { handleCancelCourse, isCancelPersonalCourseLoading } =
    useCancelCourseEnrollment({ maKhoaHoc });

  const onCancelEnrollmentClick = () => setIsCancelModalOpen(true);

  const onModalConfirm = () => {
    setIsCancelModalOpen(false);
    handleCancelCourse();
  };

  const onModalCancel = () => setIsCancelModalOpen(false);
  const closeCancelModal = () => setIsCancelModalOpen(false);
  return {
    isCancelModalOpen,
    setIsCancelModalOpen,
    onCancelEnrollmentClick,
    handleCancelCourse,
    isCancelPersonalCourseLoading,
    onModalConfirm,
    onModalCancel,
    closeCancelModal,
    maKhoaHoc,
  };
};

export type UsePersonalCourseDetailReturn = ReturnType<
  typeof usePersonalCourseDetail
>;
