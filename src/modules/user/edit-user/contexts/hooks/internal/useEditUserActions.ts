import type {
  UpdateUserFormData,
  UserInfo,
} from "@modules/user/edit-user/types";
import type { UserPayload } from "@modules/user/types";
import { ENTITIES } from "@shared/domain";
import { getErrorMessage } from "@shared/error";
import { execution } from "@shared/execution";
import { Navigation } from "@shared/navigation";
import { Loading, Modal, Toast } from "@shared/overlays";

import { createUpdateUserPayload } from "./helpers";
import type { UseEditFormReturn } from "./useEditForm";
import { useUpdateUserMutation } from "./useUpdateUserMutation";

type UseEditUserActionsProps = {
  isDirty: boolean;
  handleSubmit: UseEditFormReturn["handleSubmit"];
  targetUser: UserInfo | undefined;
};
export const useEditUserActions = ({
  isDirty,
  handleSubmit,
  targetUser,
}: UseEditUserActionsProps) => {
  const { go, back } = Navigation.hooks.useNavigate();
  const { loader } = Loading.use();
  const toaster = Toast.use();
  const modal = Modal.use();

  const { mutateAsync } = useUpdateUserMutation();

  if (!targetUser) return;

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

  const onValid = (data: UpdateUserFormData) =>
    modal.open({
      ...Modal.config.update(ENTITIES.USER),
      onConfirm: () =>
        handleSubmitNewUser(createUpdateUserPayload(data, targetUser)),
    });

  const handleSubmitEvent = () => void handleSubmit(onValid)();

  const handleSubmitNewUser = async (data: UserPayload) => {
    if (!data) return;
    const submitNewUserTask = () => mutateAsync(data);

    try {
      await execution.runAsyncTask(submitNewUserTask, loader);

      go(Navigation.admin.keys.USER, "admin", {
        toastState: Toast.config.success.update(ENTITIES.USER),
        taiKhoan: data.taiKhoan,
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
    handleSubmitEvent,

    onCancelClick,
  };
};
