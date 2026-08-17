import { useMutation } from "@tanstack/react-query";

import { register } from "./api";

export const useRegisterMutation = () => {
  const mutation = useMutation({
    mutationFn: register,
  });

  return {
    register: mutation.mutateAsync,
    isRegistering: mutation.isPending,
  };
};
