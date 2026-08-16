import { useRegisterMutation } from "./useRegisterMutation";
import { registerValidationRules } from "./validation";

export const RegisterAuth = {
  mutation: useRegisterMutation,
  validation: registerValidationRules,
};
