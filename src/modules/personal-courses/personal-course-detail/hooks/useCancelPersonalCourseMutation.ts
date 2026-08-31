import { cancelCourse } from "@modules/personal-courses/api";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

export const useCancelPersonalCourseMutation = (queryKeyList?: string[]) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: cancelCourse,
    mutationKey: ["cancelCourse"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userInfor"] });
      queryKeyList?.forEach((queryKey) => {
        queryClient.invalidateQueries({ queryKey: [queryKey] });
      });
    },
  });
  return {
    mutation: mutation.mutateAsync,
    isLoading: mutation.isPending,
  };
};
