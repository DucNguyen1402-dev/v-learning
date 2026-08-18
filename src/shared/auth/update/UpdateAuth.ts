import { useUpdateMutation } from "./useUpdateMutation";
import { updateUserValidation } from "./validation";

export const UpdateAuth = {
  useMutation: useUpdateMutation,
  validation: updateUserValidation,
};
