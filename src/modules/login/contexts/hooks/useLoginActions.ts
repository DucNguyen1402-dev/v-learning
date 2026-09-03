import { useState } from "react";
import type { SubmitHandler, UseFormHandleSubmit } from "react-hook-form";

import { LoginFieldNamesValues } from "@modules/login/constants";
import type { LoginData } from "@modules/login/types";
import { CurrentUserStorage } from "@shared/auth";
import { LoginAuth } from "@shared/auth/login";
import { getErrorMessage } from "@shared/error";
import { execution } from "@shared/execution";
import { createPayload } from "@shared/form-utils";
import { Navigation } from "@shared/navigation";
import { Toast } from "@shared/overlays";

type UseLoginActionsParams = {
  handleSubmit: UseFormHandleSubmit<LoginData>;
  remember: boolean;
};

export const useLoginActions = ({
  handleSubmit,
  remember,
}: UseLoginActionsParams) => {
  const { login } = LoginAuth.useMutation();
  const { go } = Navigation.hooks.useNavigate();
  const toast = Toast.use();
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const onValid: SubmitHandler<LoginData> = async (data) => {
    setIsLoggingIn(true);
    const payload = createPayload(data, LoginFieldNamesValues);

    const loginTask = () => login({ payload, remember });

    try {
      await execution.runAsyncTask(loginTask);
      const isAdmin = CurrentUserStorage.isAdmin();
      const navigationArea = isAdmin
        ? Navigation.admin.keys.COURSES
        : Navigation.client.keys.HOME;

      go({
        routeKey: navigationArea,
        area: isAdmin ? "admin" : "client",
        payload: {
          toastState: Toast.config.success.login(),
        },
      });
    } catch (error) {
      const message = getErrorMessage({
        error,
        messageForInternalSeverError:
          "Tài khoản hoặc mật khẩu không chính xác.",
      });
      toast.show(Toast.config.error(message));
    } finally {
      setIsLoggingIn(false);
    }
  };

  const onLoginClick = () => {
    void handleSubmit(onValid)();
  };

  return {
    onLoginClick,
    isLoggingIn,
  };
};
