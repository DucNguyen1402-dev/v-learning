import { useMutation, useQueryClient } from "@tanstack/react-query";

import { uploadCourseImage } from "../api";

export function useCourseImageMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: uploadCourseImage,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["courses"],
      });
    },
  });
}
