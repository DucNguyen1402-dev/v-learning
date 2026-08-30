import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateUser } from "../api";

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
