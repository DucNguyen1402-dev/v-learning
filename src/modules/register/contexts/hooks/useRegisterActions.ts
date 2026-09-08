import { useState } from "react";
import type { UseFormHandleSubmit } from "react-hook-form";

import { LoginNavigation } from "@modules/login/navigation";
import { ENTITIES } from "@shared/domain";
import { getErrorMessage } from "@shared/error";
import { execution } from "@shared/execution";
import { Navigation } from "@shared/navigation";
import { Toast } from "@shared/overlays";
import { createPayload } from "@shared/utils";

import { REGISTER_FIELD_NAME_VALUES } from "../../constants";
import type { RegisterData } from "../../types";
import { useRegisterMutation } from "./useRegisterMutation";
type UseRegisterActionsProps = {
  handleSubmit: UseFormHandleSubmit<RegisterData>;
};

export const useRegisterActions = ({
  handleSubmit,
}: UseRegisterActionsProps) => {
  const { register } = useRegisterMutation();
  const [isRegistering, setIsRegistering] = useState(false);
  const { go } = Navigation.hooks.useNavigateWithState();
  const toast = Toast.use();
  const onValid = async (data: RegisterData) => {
    setIsRegistering(true);
    const payload = createPayload(data, REGISTER_FIELD_NAME_VALUES);

    try {
      await execution.runAsyncTask(() => register(payload));

      go({
        routeKey: Navigation.client.keys.LOGIN,
        payload: {
          toastState: Toast.config.success.register(ENTITIES.ACCOUNT),
          ...LoginNavigation.registrationSuccess(),
        },
      });
    } catch (error) {
      const errorMessage = getErrorMessage({
        error,
        messageForInternalSeverError: "Email đã tồn tại!",
      });
      toast.show(Toast.config.error(errorMessage));
    } finally {
      setIsRegistering(false);
    }
  };

  const onRegisterClick = () => {
    void handleSubmit(onValid)();
  };
  return {
    onRegisterClick,
    isRegistering,
  };
};
