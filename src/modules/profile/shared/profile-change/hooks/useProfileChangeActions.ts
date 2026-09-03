import { UserInfor } from "@shared/auth";
import { UpdateAuth } from "@shared/auth";
import { ENTITIES } from "@shared/domain";
import { getErrorMessage } from "@shared/error";
import { execution } from "@shared/execution";
import { createPayload } from "@shared/form-utils";
import { Navigation } from "@shared/navigation";
import { Loading, Modal, Toast } from "@shared/overlays";

import type { ProfileChangeFormValues } from "../types";
import { useProfileChangeForm } from "./useProfileChangeForm";

export const useProfileChangeActions = () => {
  const { infor } = UserInfor.useQuery();
  const toast = Toast.use();
  const modal = Modal.use();
  const { loader } = Loading.use();
  const { back, go } = Navigation.hooks.useNavigate();
  const { update } = UpdateAuth.useMutation();

  const { register, handleSubmit, getFieldWithFormState, isDirty, isValid } =
    useProfileChangeForm();

  const currentArea = Navigation.hooks.useCurrentArea();

  const onValid = async (data: ProfileChangeFormValues) => {
    if (!infor) return;

    const payload = createPayload(
      {
        ...data,
        matKhau: infor.matKhau,
        taiKhoan: infor.taiKhoan,
        maLoaiNguoiDung: infor.maLoaiNguoiDung,
        maNhom: infor.maNhom,
      },
      UpdateAuth.requiredFields,
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
