import type { LoginData } from "@modules/login";
import { AccessTokenStorage, CurrentUserStorage } from "@shared/auth";
import { UserPreferences } from "@shared/user";
import { useMutation } from "@tanstack/react-query";

import { login } from "./api";
import type { LoginFn } from "./types";

type LoginMutationVariables = {
  payload: LoginData;
  remember: boolean;
};

export const useLoginMutation = () => {
  const { refreshPreferences } = UserPreferences.use();
  const mutation = useMutation({
    mutationFn: ({ payload }: LoginMutationVariables) => login(payload),
    onSuccess: (data, variable) => {
      const user = {
        taiKhoan: data.taiKhoan,
        hoTen: data.hoTen,
        email: data.email,
        soDT: data.soDT,
        maLoaiNguoiDung: data.maLoaiNguoiDung,
      };
      AccessTokenStorage.save(data.accessToken, variable.remember);
      CurrentUserStorage.save(user, variable.remember);
      refreshPreferences();
    },
  });

  return {
    login: mutation.mutateAsync as LoginFn,
    isLoggingIn: mutation.isPending,
    error: mutation.error,
  };
};
