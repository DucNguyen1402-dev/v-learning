import { useForm } from "react-hook-form";

import type { ProfileChangeFormValues } from "../types";

import { CurrentUser } from "@/shared/current-user";

export const useProfileChangeForm = () => {
  const { profile } = CurrentUser.use();
  const { register, handleSubmit, formState, getFieldState } =
    useForm<ProfileChangeFormValues>({
      defaultValues: {
        hoTen: profile.current.hoTen,
        email: profile.current.email,
        soDT: profile.current.soDT,
      },
      mode: "onChange",
    });

  const getFieldWithFormState = (name: keyof ProfileChangeFormValues) => {
    return {
      invalid: getFieldState(name).invalid,
      errorMessage: formState.errors[name]?.message,
    };
  };
  return {
    register,
    handleSubmit,
    getFieldWithFormState,
    isDirty: formState.isDirty,
    isValid: formState.isValid,
  };
};
