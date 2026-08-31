import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

import { registerCourse } from "../api";

export const useRegisterMutation = (queryKeys?: string[]) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: registerCourse,
    mutationKey: ["registerCourse"],
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["userInfor"],
      });

      queryKeys?.forEach((key) => {
        queryClient.invalidateQueries({
          queryKey: [key],
        });
      });
    },
  });
};
