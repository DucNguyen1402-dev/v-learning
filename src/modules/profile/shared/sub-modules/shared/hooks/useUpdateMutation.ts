import { CurrentUser } from "@shared/current-user";
import { CurrentUserStorage } from "@shared/storage";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

import { updateUser } from "./api";

export const useUpdateMutation = () => {
  const { refreshCurrentUser } = CurrentUser.use();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: updateUser,
    onSuccess: (data) => {
      const { soDt, ...rest } = data;
      CurrentUserStorage.update({ ...rest, soDT: soDt });

      queryClient.invalidateQueries({ queryKey: ["currentUser"] });
      refreshCurrentUser();
    },
  });
  return {
    update: mutation.mutateAsync,
  };
};
