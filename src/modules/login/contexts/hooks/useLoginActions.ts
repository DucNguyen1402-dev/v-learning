import type { UseFormHandleSubmit } from "react-hook-form";

import type { LoginFormValues } from "@modules/login/type";
import { Login } from "@shared/auth";
import { useRouteBack } from "@shared/hooks";

type UseLoginActionsParams = {
  handleSubmit: UseFormHandleSubmit<LoginFormValues>;
};

export const useLoginActions = ({ handleSubmit }: UseLoginActionsParams) => {
  const { login } = Login.use();
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
