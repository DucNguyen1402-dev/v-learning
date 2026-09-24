import { useState } from "react";

import { useEnrollUserMutation } from "@modules/courses/admin/shared/hooks";
import { getErrorMessage } from "@shared/error";
import { Navigation } from "@shared/navigation";
import { Modal, Toast } from "@shared/overlays";
import { Pagination } from "@shared/table";

import type { UnenrolledUser } from "../../types";
type UseEnrollmentUserTableRowParams = {
  maKhoaHoc: string;
  taiKhoan: string;
};
export const useEnrollUserTableRow = ({
  maKhoaHoc,
  taiKhoan,
}: UseEnrollmentUserTableRowParams) => {
  const modal = Modal.use();
  const toast = Toast.use();
  const { refreshCurrent } = Navigation.hooks.useNavigateWithState();
  const pagination = Pagination.use<UnenrolledUser>();

  const [rowState, setRowState] = useState({
    isCanceling: false,
    isEnrolling: false,
  });

  const { mutateAsync: enrollUserMutation, isPending: isEnrollUserPending } =
    useEnrollUserMutation(["unenrolledUsers"]);

  const confirmEnrollUser = async () => {
    const payload = {
      maKhoaHoc,
      taiKhoan,
    };
    try {
      await enrollUserMutation(payload);
      refreshCurrent({
        payload: {
          toastState: Toast.config.success.enrollUser(taiKhoan),
          previousPage: pagination.state.currentPage,
        },
      });
    } catch (error) {
      toast.show(Toast.config.error(getErrorMessage({ error })));
    } finally {
      setRowState((prev) => ({ ...prev, isEnrolling: false }));
    }
  };

  const onEnrollUserClick = () => {
    setRowState((prev) => ({ ...prev, isEnrolling: true }));
    modal.open({
      ...Modal.config.confirmUserEnrollment(taiKhoan),
      onConfirm: confirmEnrollUser,
      onCancel: () => setRowState((prev) => ({ ...prev, isEnrolling: false })),
    });
  };

  return {
    isEnrollUserPending,
    onEnrollUserClick,
    isEnrolling: rowState.isEnrolling,
  };
};
