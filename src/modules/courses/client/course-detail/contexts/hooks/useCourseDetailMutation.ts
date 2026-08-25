import { registerCourse } from "@modules/courses/api";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

export const useCourseDetailMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: registerCourse,
    mutationKey: ["registerCourse"],
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["userInfor"],
      });
    },
  });
};
