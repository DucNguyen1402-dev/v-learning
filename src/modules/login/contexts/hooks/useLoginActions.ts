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
  const { login, isLoggingIn } = LoginAuth.useMutation();
  const { go } = Navigation.hooks.useNavigate();
  const toast = Toast.use();

  const onValid: SubmitHandler<LoginData> = async (data) => {
    const payload = createPayload(data, LoginFieldNamesValues);

    const loginTask = () => login({ payload, remember });
    try {
      await execution.runAsyncTask(loginTask);
      const isAdmin = CurrentUserStorage.isAdmin();
      const navigationArea = isAdmin
        ? Navigation.admin.keys.COURSES
        : Navigation.client.keys.HOME;

      go(
        navigationArea,
        isAdmin ? "admin" : "client",
        Toast.config.success.login(),
      );
    } catch (error) {
      const message = getErrorMessage({
        error,
        messageForInternalSeverError:
          "Tài khoản hoặc mật khẩu không chính xác.",
      });
      toast.show(Toast.config.error(message));
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
