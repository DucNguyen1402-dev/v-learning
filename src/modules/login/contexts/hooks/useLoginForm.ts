import { useForm } from "react-hook-form";

import type { LoginData } from "@modules/login/types";

export const useLoginForm = () => {
  const { register, handleSubmit, getFieldState, formState } =
    useForm<LoginData>({
      defaultValues: {
        taiKhoan: "",
        matKhau: "",
      },
    });

  const registerFieldState = (name: keyof LoginData) => {
    const fieldState = getFieldState(name, formState);
    return {
      invalid: fieldState.invalid,
      error: fieldState.error,
    };
  };
  return {
    register,
    handleSubmit,
    registerFieldState,
  };
};
