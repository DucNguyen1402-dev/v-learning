import type { UseFormHandleSubmit } from "react-hook-form";

import type { LoginFormValues } from "@modules/login/type";
import { CLIENT_ROUTES_KEYS } from "@routes/client";
import type { LoginFn } from "@shared/auth";
import { getErrorMessage } from "@shared/error";
import { useRouteNavigation } from "@shared/navigation";
import { Toast } from "@shared/overlays";

type UseLoginActionsParams = {
  handleSubmit: UseFormHandleSubmit<LoginFormValues>;
  login: LoginFn;
};

export const useLoginActions = ({
  handleSubmit,
  login,
}: UseLoginActionsParams) => {
  const { go } = useRouteNavigation();
  const toast = Toast.use();

  type onValidParam = {
    taiKhoan: string;
    matKhau: string;
    remember: boolean;
  };

  const onValid = async (data: onValidParam) => {
    const payload = {
      taiKhoan: data.taiKhoan,
      matKhau: data.matKhau,
    };
    try {
      await login({ payload, remember: data.remember });
      go(CLIENT_ROUTES_KEYS.home, Toast.config.success.login());
    } catch (error) {
      const message = getErrorMessage(error);

      toast.show({
        ...Toast.config.error(message),
      });
    }
  };

  const onLoginClick = () => handleSubmit(onValid)();

  return {
    onLoginClick,
  };
};
