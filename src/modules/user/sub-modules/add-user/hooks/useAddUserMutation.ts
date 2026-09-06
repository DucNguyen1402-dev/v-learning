import { useMutation, useQueryClient } from "@tanstack/react-query";

import { addUser } from "../api";

export function useAddUserMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addUser,
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
