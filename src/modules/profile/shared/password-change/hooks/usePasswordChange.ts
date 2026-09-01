import { usePasswordChangeActions } from "./usePasswordChangeActions";
import { usePasswordChangeForm } from "./usePasswordChangeForm";

export const usePasswordChange = () => {
  const { register, isDirty, isValid, handleSubmit, getFieldWithFormState } =
    usePasswordChangeForm();
  const { onSaveClick, onCancelClick } = usePasswordChangeActions({
    handleSubmit,
    isValid,
    isDirty,
  });

  return {
    form: {
      register,
      isDirty,
      isValid,
      getFieldWithFormState,
    },
    actions: {
      onSaveClick,
      onCancelClick,
    },
  };
};
