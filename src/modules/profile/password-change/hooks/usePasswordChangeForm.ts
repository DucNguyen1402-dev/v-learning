import { useForm } from "react-hook-form";

import type { PasswordChangeFormValues } from "../types";

export const usePasswordChangeForm = () => {
  const { register, formState, handleSubmit, getFieldState } =
    useForm<PasswordChangeFormValues>({
      defaultValues: {
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      },
      mode: "onChange",
    });

  const getFieldWithFormState = (fieldName: keyof PasswordChangeFormValues) => {
    const fieldState = getFieldState(fieldName, formState);
    return {
      invalid: fieldState.invalid,
      errorMessage: fieldState.error?.message,
    };
  };

  return {
    register,
    isDirty: formState.isDirty,
    isValid: formState.isValid,
    handleSubmit,
    getFieldWithFormState,
  };
};
