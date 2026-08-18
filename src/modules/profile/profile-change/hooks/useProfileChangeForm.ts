import { useForm } from "react-hook-form";

import type { ProfileChangeFormValues } from "@modules/profile/profile-change/types";
import { UserProfile } from "@shared/user-profile";
export const useProfileChangeForm = () => {
  const { profile } = UserProfile.use();
  const { register, handleSubmit, formState, getFieldState } =
    useForm<ProfileChangeFormValues>({
      defaultValues: {
        hoTen: profile.name,
        email: profile.email,
        soDT: profile.phone,
      },
    });

  const getFieldWithFormState = (name: keyof ProfileChangeFormValues) => {
    return {
      invalid: getFieldState(name).invalid,
      error: formState.errors[name]?.message,
    };
  };
  return {
    register,
    handleSubmit,
    getFieldState,
    getFieldWithFormState,
  };
};
