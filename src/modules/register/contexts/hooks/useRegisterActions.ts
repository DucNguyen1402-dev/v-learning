import { useState } from "react";
import type { UseFormHandleSubmit } from "react-hook-form";

import { REGISTER_FIELD_NAME_VALUES } from "@modules/register/constants";
import type { RegisterData } from "@modules/register/types";
import { RegisterAuth } from "@shared/auth/register";
import { ENTITIES } from "@shared/domain";
import { getErrorMessage } from "@shared/error";
import { execution } from "@shared/execution";
import { createPayload } from "@shared/form-utils";
import { Navigation } from "@shared/navigation";
import { Toast } from "@shared/overlays";
type UseRegisterActionsProps = {
  handleSubmit: UseFormHandleSubmit<RegisterData>;
};

export const useRegisterActions = ({
  handleSubmit,
}: UseRegisterActionsProps) => {
  const { register } = RegisterAuth.mutation();
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
          isRegistrationSuccessful: true,
        },
      });
    } catch (error) {
      const errorMessage = getErrorMessage({ error });
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
