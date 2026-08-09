import { useForm } from "react-hook-form";

import type { LoginFormValues } from "@modules/login/type";

export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<LoginFormValues>({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      remember: false,
    },
  });

  return {
    register,
    errors,
    handleSubmit,
    control,
  };
};
