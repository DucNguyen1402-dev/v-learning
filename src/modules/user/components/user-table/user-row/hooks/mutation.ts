import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

import { deleteCourse } from "./api";

export const useUserDeletionMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (taiKhoan: string) => deleteCourse(taiKhoan),
    mutationKey: ["deleteUser"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["paginatedUsers"] });
    },
  });
};
