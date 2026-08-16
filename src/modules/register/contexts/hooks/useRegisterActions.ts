import type { UseFormHandleSubmit } from "react-hook-form";

import type { RegisterData } from "@modules/register/types";
import { CLIENT_ROUTE_KEYS } from "@routes/client";
import { Auth, type RegisterPayload } from "@shared/auth";
import { getErrorMessage } from "@shared/error";
import { execution } from "@shared/execution";
import { createPayload } from "@shared/form-utils";
import { Navigation } from "@shared/navigation";
import { Toast } from "@shared/overlays";

import { REGISTER_FIELD_NAME_VALUES } from "./constants";

type UseRegisterActionsProps = {
  handleSubmit: UseFormHandleSubmit<RegisterData>;
};

export const useRegisterActions = ({
  handleSubmit,
}: UseRegisterActionsProps) => {
  const { register, isRegistering } = Auth.register();
  const { go } = Navigation.useNavigate();
  const toast = Toast.use();
  const onValid = (data: RegisterData) => {
    const payload: RegisterPayload = createPayload(
      data,
      REGISTER_FIELD_NAME_VALUES,
    );

    const registerTask = async (): Promise<unknown> => await register(payload);

    try {
      execution.runAsyncTask(registerTask);
      go(CLIENT_ROUTE_KEYS.LOGIN, Toast.config.success.register());
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

export type UseRegisterActionsReturnValues = ReturnType<
  typeof useRegisterActions
>;
