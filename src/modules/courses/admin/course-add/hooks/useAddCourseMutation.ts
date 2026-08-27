import { useMutation, useQueryClient } from "@tanstack/react-query";

import { addCourse } from "../api";

export function useAddCourseMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addCourse,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["courses"],
      });
    },
  });
}
