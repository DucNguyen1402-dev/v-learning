import { useForm } from "react-hook-form";

import type { RegisterData } from "@modules/register/types";

import { getDefaultValues } from "./utils";

export const useRegisterForm = () => {
  const { register, handleSubmit, getFieldState, formState } =
    useForm<RegisterData>({
      defaultValues: getDefaultValues(),
    });

  const registerFieldState = (fieldName: keyof RegisterData) => {
    const fieldState = getFieldState(fieldName, formState);
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

export type UseRegisterFormReturnValues = ReturnType<typeof useRegisterForm>;
