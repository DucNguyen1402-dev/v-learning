import { getCourseInfo } from "@modules/courses/api";
import { useQuery } from "@tanstack/react-query";

export const useCourseDetailQuery = (courseId: string) => {
  return useQuery({
    queryKey: ["course-detail", courseId],
    queryFn: () => getCourseInfo(courseId),
  });
};
