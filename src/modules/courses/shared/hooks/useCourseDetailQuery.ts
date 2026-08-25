import { useQuery } from "@tanstack/react-query";

import { getCourseInfo } from "@/modules/courses/shared/api";

export const useCourseDetailQuery = (courseId: string) => {
  return useQuery({
    queryKey: ["course-detail", courseId],
    queryFn: () => getCourseInfo(courseId),
  });
};
