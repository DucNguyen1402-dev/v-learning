import { useForm } from "react-hook-form";

export const usePasswordChangeForm = () => {
  const { register, formState, handleSubmit, getFieldState } = useForm({
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  const getFieldWithFormState = (fieldName: string) => {
    const fieldState = getFieldState(fieldName);
    return {
      invalid: fieldState.invalid,
      errorMessage: fieldState.error?.message,
    };
  };

  return {
    register,
    errors: formState.errors,
    isDirty: formState.isDirty,
    handleSubmit,
    getFieldWithFormState,
  };
};
