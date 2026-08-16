import type { UseFormHandleSubmit } from "react-hook-form";

import { REGISTER_FIELD_NAME_VALUES } from "@modules/register/constants";
import type { RegisterData } from "@modules/register/types";
import { CLIENT_ROUTE_KEYS } from "@routes/client";
import { RegisterAuth } from "@shared/auth/register";
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
  const { register, isRegistering } = RegisterAuth.mutation();
  const { go } = Navigation.useNavigate();
  const toast = Toast.use();
  const onValid = (data: RegisterData) => {
    const payload = createPayload(data, REGISTER_FIELD_NAME_VALUES);

    try {
      execution.runAsyncTask(() => register(payload));
      go(CLIENT_ROUTE_KEYS.LOGIN, {
        toast: Toast.config.success.register(),
        previousKey: CLIENT_ROUTE_KEYS.REGISTER,
      });
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      toast.show(Toast.config.error(errorMessage));
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
