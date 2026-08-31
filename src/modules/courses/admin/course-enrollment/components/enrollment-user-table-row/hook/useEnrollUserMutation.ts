import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

import { enrollUser } from "../api";

export const useEnrollUserMutation = (invalidateQueryKeys: string[]) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: enrollUser,
    mutationKey: ["enrollUser"],
    onSuccess: () => {
      invalidateQueryKeys.forEach((key) =>
        queryClient.invalidateQueries({
          queryKey: [key],
        }),
      );
    },
  });
};
