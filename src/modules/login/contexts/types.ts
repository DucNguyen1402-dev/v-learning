import type {
  Control,
  FieldError,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";

import type { LoginFormFieldNames, LoginFormValues } from "./hooks";

type HookFormProps<T extends FieldValues> = {
  register: UseFormRegister<T>;
  control: Control<T>;
  registerFieldState: (name: keyof LoginFormValues) => {
    invalid: boolean;
    error: FieldError | undefined;
  };
};

export type LoginContextValues = {
  hookForm: HookFormProps<LoginFormValues>;
  actions: {
    onLoginClick: () => void;
  };
  loading: boolean;
  LOGIN_FORM_FIELD_NAMES: LoginFormFieldNames;
};
