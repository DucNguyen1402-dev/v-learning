import { useState } from "react";

import { ENTITIES } from "@shared/domain";
import { getErrorMessage } from "@shared/error";
import { execution } from "@shared/execution";
import { Loading, Modal, Toast } from "@shared/overlays";

import { useUserDeletionMutation } from "./mutation";

type UseUserDeletionProps = {
  taiKhoan: string;
};
export const useUserDeletion = ({ taiKhoan }: UseUserDeletionProps) => {
  const { mutateAsync: deleteUserMutation } = useUserDeletionMutation();
  const [targetUserDeletion, setTargetUserDeletion] = useState<string | null>(
    null,
  );

  const modal = Modal.use();
  const { loader } = Loading.use();
  const toast = Toast.use();
  const deleteUser = async () => {
    setTargetUserDeletion(null);
    modal.close();
    try {
      await execution.runAsyncTask(() => deleteUserMutation(taiKhoan), loader);
      toast.show(Toast.config.success.delete(ENTITIES.USER));
    } catch (error) {
      toast.show(
        Toast.config.error(
          getErrorMessage({
            error,
            messageForInternalSeverError:
              "Người dùng đã tham gia khóa học không thể xóa!",
          }),
        ),
      );
    }
  };

  const onCancelDeletion = () => setTargetUserDeletion(null);

  const onDeleteClick = () => {
    setTargetUserDeletion(taiKhoan);
    modal.open({
      ...Modal.config.delete(ENTITIES.USER, taiKhoan),
      onConfirm: () => deleteUser(),
      onCancel: onCancelDeletion,
    });
  };

  return { onDeleteClick, targetUserDeletion };
};
