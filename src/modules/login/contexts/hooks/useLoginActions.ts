import type { SubmitHandler, UseFormHandleSubmit } from "react-hook-form";

import type { LoginFormValues } from "@modules/login/type";
import { AppRoutes } from "@routes";
import type { LoginFn, LoginResponse } from "@shared/auth";
import { getErrorMessage } from "@shared/error";
import { execution } from "@shared/execution";
import { createPayload } from "@shared/form-utils";
import { Navigation } from "@shared/navigation";
import { Toast } from "@shared/overlays";

type UseLoginActionsParams = {
  handleSubmit: UseFormHandleSubmit<LoginFormValues>;
  login: LoginFn;
};

export const useLoginActions = ({
  handleSubmit,
  login,
}: UseLoginActionsParams) => {
  const { go } = Navigation.useNavigate();
  const toast = Toast.use();

  const onValid: SubmitHandler<LoginFormValues> = async (data) => {
    const payload = createPayload(data, ["taiKhoan", "matKhau"]);

    const loginTask = async (): Promise<LoginResponse> =>
      await login({ payload, remember: data.remember });

    try {
      await execution.runAsyncTask(loginTask);
      go(AppRoutes.client.keys.HOME, Toast.config.success.login());
    } catch (error) {
      const message = getErrorMessage(error);
      toast.show({
        ...Toast.config.error(message),
      });
    }
  };

  const onLoginClick = () => {
    void handleSubmit(onValid)();
  };

  return {
    onLoginClick,
  };
};
