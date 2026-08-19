import { useQuery } from "@tanstack/react-query";

import { getCourse } from "./api";
export const useCoursesQuery = () => {
  return useQuery({
    queryKey: ["courses"],
    queryFn: getCourse,
  });
};
