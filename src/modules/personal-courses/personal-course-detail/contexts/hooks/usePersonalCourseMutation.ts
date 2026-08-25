import { cancelCourse } from "@modules/personal-courses/api";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

export const usePersonalCourseMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: cancelCourse,
    mutationKey: ["cancelCourse"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userInfor"] });
    },
  });
  return {
    cancelCourseMutation: mutation,
    isCancelCourseLoading: mutation.isPending,
  };
};
