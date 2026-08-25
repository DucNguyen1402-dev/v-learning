import { getCourses } from "@modules/courses/api";
import { useQuery } from "@tanstack/react-query";

export const useCourseQuery = () => {
  return useQuery({
    queryKey: ["courses"],
    queryFn: getCourses,
  });
};
