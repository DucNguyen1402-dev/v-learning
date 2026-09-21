import type { LoginData } from "@modules/login/types";
import { CurrentUser } from "@shared/current-user";
import { Session } from "@shared/session";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

import { login } from "./api";

type LoginMutationVariables = {
  payload: LoginData;
  remember: boolean;
};

export const useLoginMutation = () => {
  const { refreshCurrentUser } = CurrentUser.use();
  const queryClient = useQueryClient();
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

      refreshCurrentUser();
      queryClient.invalidateQueries({ queryKey: ["currentUser"] });
    },
  });

  return {
    login: mutation.mutateAsync,
  };
};
