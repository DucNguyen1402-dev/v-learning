import { useQuery } from "@tanstack/react-query";

import { getPaginatedCourse } from "./api";
type UseCoursesQueryProps = {
  page: number;
  pageSize: number;
};
export const useCoursesQuery = ({ page, pageSize }: UseCoursesQueryProps) => {
  return useQuery({
    queryKey: ["courses", page, pageSize],
    queryFn: () => getPaginatedCourse({ page, pageSize }),
  });
};
