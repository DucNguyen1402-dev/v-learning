import type {
  Control,
  FieldErrors,
  FieldValues,
  UseFormGetFieldState,
  UseFormRegister,
} from "react-hook-form";

import type { LoginFormFieldNames, LoginFormValues } from "./hooks";

type HookFormProps<T extends FieldValues> = {
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  control: Control<T>;
};

export type LoginContextValues = {
  hookForm: HookFormProps<LoginFormValues> & {
    getFieldState: UseFormGetFieldState<LoginFormValues>;
  };
  actions: {
    onLoginClick: () => void;
  };
  loading: boolean;
  LOGIN_FORM_FIELD_NAMES: LoginFormFieldNames;
};
