import { CurrentUserStorage } from "@shared/auth";
import { UserPreferences, UserProfile } from "@shared/user";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

import { updateUser } from "./api";

export const useUpdateMutation = () => {
  const { refreshPreferences } = UserPreferences.use();
  const { refreshProfile } = UserProfile.use();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: updateUser,
    onSuccess: (data) => {
      const { soDt, ...rest } = data;
      CurrentUserStorage.update({ ...rest, soDT: soDt });

      queryClient.invalidateQueries({ queryKey: ["userInfor"] });
      refreshPreferences();
      refreshProfile();
    },
  });
  return {
    update: mutation.mutateAsync,
    isUpdating: mutation.isPending,
  };
};
