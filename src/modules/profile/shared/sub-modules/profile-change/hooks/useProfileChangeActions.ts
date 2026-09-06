import { useCurrentUserQuery } from "@shared/current-user";
import { ENTITIES } from "@shared/domain";
import { getErrorMessage } from "@shared/error";
import { execution } from "@shared/execution";
import { Navigation } from "@shared/navigation";
import { Loading, Modal, Toast } from "@shared/overlays";
import { createPayload } from "@shared/utils";

import { REQUIRED_FIELDS } from "../../shared/constants";
import { useUpdateMutation } from "../../shared/hooks";
import type { ProfileChangeFormValues } from "../types";
import { useProfileChangeForm } from "./useProfileChangeForm";

export const useProfileChangeActions = () => {
  const { currentUser } = useCurrentUserQuery();
  const toast = Toast.use();
  const modal = Modal.use();
  const { loader } = Loading.use();
  const { back, go } = Navigation.hooks.useNavigateWithState();
  const { update } = useUpdateMutation();

  const { register, handleSubmit, getFieldWithFormState, isDirty, isValid } =
    useProfileChangeForm();

  const currentArea = Navigation.hooks.useCurrentArea();

  const onValid = async (data: ProfileChangeFormValues) => {
    if (!currentUser) return;

    const payload = createPayload(
      {
        ...data,
        matKhau: currentUser.matKhau,
        taiKhoan: currentUser.taiKhoan,
        maLoaiNguoiDung: currentUser.maLoaiNguoiDung,
        maNhom: currentUser.maNhom,
      },
      REQUIRED_FIELDS,
    );

    try {
      await execution.runAsyncTask(() => update(payload), loader);
      go({
        routeKey: Navigation[currentArea].keys.PROFILE,
        payload: {
          toastState: Toast.config.success.update(ENTITIES.USER),
        },
      });
    } catch (error) {
      const message = getErrorMessage({
        error,
        messageForInternalSeverError: "Email đã tồn tại!",
      });
      toast.show(Toast.config.error(message));
    }
  };

  const onConfirmSave = handleSubmit(onValid);

  const onSaveClick = async () => {
    if (!isValid) return;
    modal.open({
      ...Modal.config.update(ENTITIES.USER),
      onConfirm: onConfirmSave,
    });
  };

  const onCancelClick = () => {
    if (!isDirty) {
      back();
      return;
    }
    modal.open({
      ...Modal.config.unsavedChanges(ENTITIES.USER),
      onConfirm: () => {
        back();
      },
    });
  };
  return {
    form: {
      register,
      getFieldWithFormState,
      isDirty,
      isValid,
    },
    actions: {
      onSaveClick,
      onCancelClick,
    },
  };
};
