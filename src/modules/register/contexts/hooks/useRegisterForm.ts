import { useForm } from "react-hook-form";

import type { RegisterFormData } from "./types";
import { getDefaultValues } from "./utils";

export const useRegisterForm = () => {
  const { register, handleSubmit, getFieldState } = useForm<RegisterFormData>({
    defaultValues: getDefaultValues(),
  });

  return {
    register,
    handleSubmit,
    getFieldState,
  };
};

export type UseRegisterFormReturnValues = ReturnType<typeof useRegisterForm>;
