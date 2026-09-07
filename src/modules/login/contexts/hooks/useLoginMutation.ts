import type { LoginData } from "@modules/login";
import { UserPreferences } from "@shared/current-user";
import { Session } from "@shared/session";
import { useMutation } from "@tanstack/react-query";

import { login } from "./api";

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

      Session.save({
        currentUser: user,
        accessToken: data.accessToken,
        remember: variable.remember,
      });

      refreshPreferences();
    },
  });

  return {
    login: mutation.mutateAsync,
  };
};
