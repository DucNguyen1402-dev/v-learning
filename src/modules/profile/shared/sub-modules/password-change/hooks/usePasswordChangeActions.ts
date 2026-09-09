import type { UseFormHandleSubmit } from "react-hook-form";

import { useCurrentUserQuery } from "@shared/current-user";
import { ENTITIES } from "@shared/domain";
import { getErrorMessage } from "@shared/error";
import { execution } from "@shared/execution";
import { Navigation } from "@shared/navigation";
import { Loading, Modal, Toast } from "@shared/overlays";
import { createPayload } from "@shared/utils";

import { REQUIRED_FIELDS } from "../../shared/constants";
import { useUpdateMutation } from "../../shared/hooks";
import type { PasswordChangeFormValues } from "../types";

type UsePasswordChangeActionsProps = {
  handleSubmit: UseFormHandleSubmit<PasswordChangeFormValues>;
  isValid: boolean;
  isDirty: boolean;
};

export const usePasswordChangeActions = ({
  handleSubmit,
  isValid,
  isDirty,
}: UsePasswordChangeActionsProps) => {
  const { currentUser } = useCurrentUserQuery();
  const currentArea = Navigation.hooks.useCurrentArea();
  const modal = Modal.use();
  const toast = Toast.use();
  const { update } = useUpdateMutation();
  const { loader } = Loading.use();
  const { go, back } = Navigation.hooks.useNavigateWithState();

  const onValid = async (data: PasswordChangeFormValues) => {
    if (!currentUser) return;

    if (data.currentPassword !== currentUser.matKhau) {
      toast.show(Toast.config.error("Mật khẩu hiện tại không đúng!"));
      return;
    }

    if (data.currentPassword === data.newPassword) {
      toast.show(
        Toast.config.error(
          "Mật khẩu mới không được trùng với mật khẩu hiện tại!",
        ),
      );
      return;
    }

    if (data.newPassword !== data.confirmPassword) {
      toast.show(
        Toast.config.error("Mật khẩu mới và xác nhận mật khẩu không khớp!"),
      );
      return;
    }

    const payload = createPayload(
      { ...currentUser, matKhau: data.newPassword },
      REQUIRED_FIELDS,
    );

    try {
      await execution.runAsyncTask(() => update(payload), loader);
      go({
        routeKey: Navigation[currentArea].keys.PROFILE,
        payload: {
          toastState: Toast.config.success.changePassword(),
        },
      });
    } catch (error) {
      const errorMessage = getErrorMessage({ error });
      toast.show(Toast.config.error(errorMessage));
    }
  };

  const onConfirmSave = handleSubmit(onValid);

  const onSaveClick = async () => {
    if (!isValid) return;
    modal.open({
      ...Modal.config.passwordChange(currentUser?.taiKhoan ?? ""),
      onConfirm: onConfirmSave,
    });
  };

  const onCancelClick = () => {
    if (!isDirty) {
      back();
      return;
    }
    modal.open({
      ...Modal.config.unsavedChanges(ENTITIES.PASSWORD),
      onConfirm: () => back(),
    });
  };

  return {
    onSaveClick,
    onCancelClick,
  };
};
