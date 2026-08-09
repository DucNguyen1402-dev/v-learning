import type {
  Control,
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";

import type { LoginFormValues } from "@modules/login/type";

type HookFormProps<T extends FieldValues> = {
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  control: Control<T>;
};

export type LoginContextValues = {
  hookForm: HookFormProps<LoginFormValues>;
  actions: {
    onLoginClick: () => void;
  };
  loading: boolean;
};
