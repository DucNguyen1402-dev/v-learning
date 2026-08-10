import type { LoginFn, LoginPayload } from "@shared/auth/types";
import { saveAccessToken, saveCurrentUser } from "@shared/auth/utils";
import { useMutation } from "@tanstack/react-query";

import { login } from "../api/login";

type LoginMutationVariables = {
  payload: LoginPayload;
  remember: boolean;
};

export const useLoginMutation = () => {
  const mutation = useMutation({
    mutationFn: ({ payload }: LoginMutationVariables) => login(payload),
    onSuccess: (data, variable) => {
      const user = {
        taiKhoan: data.taiKhoan,
        hoTen: data.hoTen,
        email: data.email,
        soDT: data.soDT,
      };
      saveAccessToken(data.accessToken, variable.remember);
      saveCurrentUser(user, variable.remember);
    },
  });

  return {
    login: mutation.mutateAsync as LoginFn,
    isLoggingIn: mutation.isPending,
    error: mutation.error,
  };
};
