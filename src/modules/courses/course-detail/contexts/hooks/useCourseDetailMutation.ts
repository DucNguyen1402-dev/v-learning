import { registerCourse } from "@modules/courses/api";
import { useMutation } from "@tanstack/react-query";

export const useCourseDetailMutation = () => {
  return useMutation({
    mutationFn: registerCourse,
    mutationKey: ["registerCourse"],
  });
};
