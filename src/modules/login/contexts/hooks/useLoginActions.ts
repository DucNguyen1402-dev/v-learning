import type { UseFormHandleSubmit } from "react-hook-form";

import type { LoginFormValues } from "@modules/login/type";
import type { LoginFn } from "@shared/auth";
import { useRouteBack } from "@shared/hooks";

type UseLoginActionsParams = {
  handleSubmit: UseFormHandleSubmit<LoginFormValues>;
  login: LoginFn;
};

export const useLoginActions = ({
  handleSubmit,
  login,
}: UseLoginActionsParams) => {
  const routeBack = useRouteBack();

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
      routeBack();
    } catch (error) {
      console.log(error);
    }
  };
  const onLoginClick = () => handleSubmit(onValid)();

  return {
    onLoginClick,
  };
};
