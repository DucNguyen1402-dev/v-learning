import { updateUser } from "@modules/user/edit-user/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateUserMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
      queryClient.invalidateQueries({
        queryKey: ["paginatedUsers"],
      });
    },
  });
}
