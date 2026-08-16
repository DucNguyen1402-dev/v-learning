import { useForm } from "react-hook-form";

import type { LoginFormValues } from "./constants";

export const useLoginForm = () => {
  const { register, handleSubmit, getFieldState, control, formState } =
    useForm<LoginFormValues>({
      defaultValues: {
        taiKhoan: "",
        matKhau: "",
        remember: false,
      },
    });

  const registerFieldState = (name: keyof LoginFormValues) => {
    const fieldState = getFieldState(name, formState);
    return {
      invalid: fieldState.invalid,
      error: fieldState.error,
    };
  };
  return {
    register,
    handleSubmit,
    control,
    registerFieldState,
  };
};
