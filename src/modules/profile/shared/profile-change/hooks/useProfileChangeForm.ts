import { useForm } from "react-hook-form";

import { UserProfile } from "@shared/user-profile";

import type { ProfileChangeFormValues } from "../types";

export const useProfileChangeForm = () => {
  const { profile } = UserProfile.use();
  const { register, handleSubmit, formState, getFieldState } =
    useForm<ProfileChangeFormValues>({
      defaultValues: {
        hoTen: profile.hoTen,
        email: profile.email,
        soDT: profile.soDT,
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
