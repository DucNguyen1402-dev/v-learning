import { useForm } from "react-hook-form";

import type { LoginFormValues } from "./constants";

export const useLoginForm = () => {
  const { register, handleSubmit, getFieldState, control } =
    useForm<LoginFormValues>({
      defaultValues: {
        taiKhoan: "",
        matKhau: "",
        remember: false,
      },
    });

  return {
    register,
    handleSubmit,
    control,
    getFieldState,
  };
};
