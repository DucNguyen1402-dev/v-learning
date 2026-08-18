import type { ProfileChangeFormValues } from "@modules/profile/profile-change/types";
import { AccessTokenStorage, CurrentUserStorage } from "@shared/auth";
import { User } from "@shared/user";
import { useMutation } from "@tanstack/react-query";

import { updateUser } from "./api";

export const useUpdateMutation = () => {
  const { refresh: refreshUser } = User.use();

  const mutation = useMutation({
    mutationFn: (payload: ProfileChangeFormValues) => updateUser(payload),
    onSuccess: (data) => {
      const user = {
        hoTen: data.hoTen,
        email: data.email,
        soDT: data.soDT,
        taiKhoan: data.taiKhoan,
      };
      CurrentUserStorage.save(user);
      AccessTokenStorage.save(data.accessToken);

      refreshUser();
    },
  });
  return {
    update: mutation.mutateAsync,
    isUpdating: mutation.isPending,
  };
};
