import { cancelCourse } from "@modules/personal-courses/api";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

type UseCancelPersonalCourseMutationProps = {
  invalidateQueryKeys?: string[];
};
export const useCancelPersonalCourseMutation = ({
  invalidateQueryKeys,
}: UseCancelPersonalCourseMutationProps) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: cancelCourse,
    mutationKey: ["cancelCourse"],
    onSuccess: () => {
      invalidateQueryKeys?.forEach((key) => {
        queryClient.invalidateQueries({ queryKey: [key] });
      });
    },
  });
  return {
    mutation: mutation.mutateAsync,
    isLoading: mutation.isPending,
  };
};
