import { CurrentUserStorage } from "@shared/auth";
import { User } from "@shared/user";
import { UserProfile } from "@shared/user-profile";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

import { updateUser } from "./api";

export const useUpdateMutation = () => {
  const { refresh: refreshUser } = User.use();
  const { refreshProfile } = UserProfile.use();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: updateUser,
    onSuccess: (data) => {
      const { soDt, ...rest } = data;
      CurrentUserStorage.update({ ...rest, soDT: soDt });

      queryClient.invalidateQueries({ queryKey: ["userInfor"] });
      refreshUser();
      refreshProfile();
    },
  });
  return {
    update: mutation.mutateAsync,
    isUpdating: mutation.isPending,
  };
};
