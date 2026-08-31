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
    handleCancelCourse();
    setIsCancelModalOpen(false);
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
