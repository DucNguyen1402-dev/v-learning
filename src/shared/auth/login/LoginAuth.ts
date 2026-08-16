import { useLoginMutation } from "./useLoginMutation";
import { loginValidationRules } from "./validation";

export const LoginAuth = {
  useMutation: useLoginMutation,
  validation: loginValidationRules,
};
