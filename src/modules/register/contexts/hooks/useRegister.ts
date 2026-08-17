import { useRegisterActions } from "./useRegisterActions";
import { useRegisterForm } from "./useRegisterForm";

export const useRegister = () => {
  const { handleSubmit, register, registerFieldState } = useRegisterForm();

  const actions = useRegisterActions({ handleSubmit });
  return {
    form: { register, registerFieldState },
    actions,
  };
};

export type UseRegisterReturn = ReturnType<typeof useRegister>;
