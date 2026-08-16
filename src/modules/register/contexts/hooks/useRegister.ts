import { REGISTER_FIELD_NAMES, type RegisterFieldNames } from "./constants";
import {
  useRegisterActions,
  type UseRegisterActionsReturnValues,
} from "./useRegisterActions";
import {
  useRegisterForm,
  type UseRegisterFormReturnValues,
} from "./useRegisterForm";

export const useRegister = () => {
  const { handleSubmit, register, registerFieldState } = useRegisterForm();

  const actions = useRegisterActions({ handleSubmit });
  return {
    form: { register, registerFieldState },
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
    REGISTER_FIELD_NAMES: RegisterFieldNames;
  };
};
