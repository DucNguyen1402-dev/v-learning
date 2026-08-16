import { REGISTER_FIELD_NAMES } from "./constants";
import type { UseRegisterActionsReturnValues } from "./useRegisterActions";
import { useRegisterActions } from "./useRegisterActions";
import type { UseRegisterFormReturnValues } from "./useRegisterForm";
import { useRegisterForm } from "./useRegisterForm";

export const useRegister = () => {
  const { handleSubmit, register, getFieldState } = useRegisterForm();

  const actions = useRegisterActions({ handleSubmit });
  return {
    form: { register, getFieldState },
    actions,
    constants: {
      REGISTER_FIELD_NAMES,
    },
  };
};
type RegisterFormWithoutHandleSubmit = Omit<
  UseRegisterFormReturnValues,
  "handleSubmit"
>;

export type UseRegisterReturnValues = {
  form: RegisterFormWithoutHandleSubmit;
  actions: UseRegisterActionsReturnValues;
  constants: {
    REGISTER_FIELD_NAMES: typeof REGISTER_FIELD_NAMES;
  };
};
