import type { ProfileChangeFormValues } from "@modules/profile/profile-change/types";
import { UpdateAuth } from "@shared/auth";

import { useProfileChangeForm } from "./useProfileChangeForm";
export const useProfileChangeActions = () => {
  const { register, handleSubmit, getFieldState, getFieldWithFormState } =
    useProfileChangeForm();

  const { update, isUpdating } = UpdateAuth.useMutation();

  const onValid = (data: ProfileChangeFormValues) => {
    console.log("Form data:", data);
    // Handle form submission logic here
    update(data);
  };

  const onSaveClick = () => {
    void handleSubmit(onValid)();
  };

  return {
    form: {
      register,
      getFieldState,
      getFieldWithFormState,
    },
    actions: {
      onSaveClick,
    },
    state: {
      isUpdating,
    },
  };
};
