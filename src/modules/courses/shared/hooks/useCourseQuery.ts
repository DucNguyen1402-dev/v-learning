import { useQuery } from "@tanstack/react-query";

import { getCourses } from "../api";

export const useCourseQuery = () => {
  return useQuery({
    queryKey: ["courses"],
    queryFn: getCourses,
  });
};
