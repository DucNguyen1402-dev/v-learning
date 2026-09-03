import type { UserPayload } from "@modules/user/types";
import { ENTITIES } from "@shared/domain";
import { getErrorMessage } from "@shared/error";
import { execution } from "@shared/execution";
import { Navigation } from "@shared/navigation";
import { Loading, Modal, Toast } from "@shared/overlays";

import { useAddForm } from "./useAddForm";
import { useAddUserMutation } from "./useAddUserMutation";

export function useAddUserActions() {
  const { go, back } = Navigation.hooks.useNavigate();
  const { loader } = Loading.use();
  const toaster = Toast.use();
  const modal = Modal.use();

  const { register, handleSubmit, errors, isDirty, control, watch } =
    useAddForm();

  const { mutateAsync } = useAddUserMutation();

  const onCancelClick = () => {
    if (isDirty) {
      modal.open({
        ...Modal.config.unsavedChanges(ENTITIES.USER),
        onConfirm: () => back(),
      });
      return;
    }
    back();
  };

  const onValid = (data: UserPayload) =>
    modal.open({
      ...Modal.config.add(ENTITIES.USER),
      onConfirm: () => handleSubmitNewUser({ ...data, maNhom: "GP01" }),
    });

  const handleSubmitEvent = () => void handleSubmit(onValid)();

  const handleSubmitNewUser = async (data: UserPayload) => {
    const submitNewUserTask = () => mutateAsync(data);

    try {
      await execution.runAsyncTask(submitNewUserTask, loader);

      go({
        routeKey: Navigation.admin.keys.USER,
        payload: {
          toastState: Toast.config.success.add(ENTITIES.USER),
          taiKhoan: data.taiKhoan,
        },
      });
    } catch (error) {
      toaster.show(
        Toast.config.error(
          getErrorMessage({
            error,
          }),
        ),
      );
    }
  };

  return {
    register,
    handleSubmitEvent,
    errors,
    onCancelClick,
    watch,
    control,
    isDirty,
  };
}
