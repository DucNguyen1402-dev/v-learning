import { useState } from "react";

import { useEnrollUserMutation } from "@modules/courses/admin/shared/hooks";
import { useCancelPersonalCourseMutation } from "@modules/courses/shared/hooks";
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

  const [rowState, setRowState] = useState({
    isCanceling: false,
    isEnrolling: false,
  });

  const { mutateAsync: enrollUserMutation, isPending: isEnrollUserPending } =
    useEnrollUserMutation(["enrolledUsers", "pendingEnrollmentUsers"]);
  const {
    mutation: cancelPersonalCourseMutation,
    isLoading: isCancelPersonalCourseLoading,
  } = useCancelPersonalCourseMutation({
    invalidateQueryKeys: ["enrolledUsers", "pendingEnrollmentUsers"],
  });

  const confirmEnrollUser = async () => {
    const payload = {
      maKhoaHoc,
      taiKhoan,
    };
    try {
      await enrollUserMutation(payload);
      toast.show(Toast.config.success.enrollUser(taiKhoan));
    } catch (error) {
      toast.show(Toast.config.error(getErrorMessage({ error })));
    } finally {
      setRowState((prev) => ({ ...prev, isEnrolling: false }));
    }
  };

  const onConfirmEnrollUserClick = () => {
    setRowState((prev) => ({ ...prev, isEnrolling: true }));
    modal.open({
      ...Modal.config.confirmUserEnrollment(taiKhoan),
      onConfirm: confirmEnrollUser,
      onCancel: () => setRowState((prev) => ({ ...prev, isEnrolling: false })),
    });
  };

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
    } finally {
      setRowState((prev) => ({ ...prev, isCanceling: false }));
    }
  };

  const onCancelCourseClick = () => {
    setRowState((prev) => ({ ...prev, isCanceling: true }));
    modal.open({
      ...Modal.config.cancelUserEnrollment(taiKhoan),
      onConfirm: cancelCourse,
      onCancel: () => setRowState((prev) => ({ ...prev, isCanceling: false })),
    });
  };
  return {
    onCancelCourseClick,
    isCancelPersonalCourseLoading,
    isCanceling: rowState.isCanceling,
    isEnrollUserPending,
    onConfirmEnrollUserClick,
    isEnrolling: rowState.isEnrolling,
  };
};
