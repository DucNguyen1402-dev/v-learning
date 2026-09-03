import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

import { deleteCourse } from "./api";

export const useCourseDeletionMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (maKhoaHoc: string) => deleteCourse(maKhoaHoc),
    mutationKey: ["deleteCourse"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courses"] });
    },
  });
};
