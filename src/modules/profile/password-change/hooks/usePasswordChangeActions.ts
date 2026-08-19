import type { UseFormHandleSubmit } from "react-hook-form";

import { UpdateAuth, UserInfor } from "@shared/auth";
import { ENTITIES } from "@shared/domain";
import { getErrorMessage } from "@shared/error";
import { execution } from "@shared/execution";
import { createPayload } from "@shared/form-utils";
import { Navigation } from "@shared/navigation";
import { Loading, Modal, Toast } from "@shared/overlays";

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
  const { infor } = UserInfor.useQuery();

  const modal = Modal.use();
  const toast = Toast.use();
  const { update } = UpdateAuth.useMutation();
  const { loader } = Loading.use();
  const { go, back } = Navigation.hooks.useNavigate();

  const onValid = async (data: PasswordChangeFormValues) => {
    if (!infor) return;
    if (data.currentPassword !== infor.matKhau) {
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
      { ...infor, matKhau: data.newPassword },
      UpdateAuth.requiredFields,
    );

    try {
      await execution.runAsyncTask(() => update(payload), loader);
      go(Navigation.client.keys.PROFILE, Toast.config.success.changePassword());
    } catch (err) {
      const errorMessage = getErrorMessage(err);
      toast.show(Toast.config.error(errorMessage));
    }
  };

  const onConfirmSave = handleSubmit(onValid);

  const onSaveClick = async () => {
    if (!isValid) return;
    modal.open({
      ...Modal.config.passwordChange(infor?.taiKhoan ?? ""),
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
