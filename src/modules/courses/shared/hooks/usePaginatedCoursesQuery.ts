import { useQuery } from "@tanstack/react-query";

import { getPaginatedCourse } from "../api";
type UseCoursesQueryProps = {
  page: number;
  pageSize: number;
  tenKhoaHoc: string;
  category: string;
};
export const usePaginatedCoursesQuery = ({
  page,
  pageSize,
  tenKhoaHoc,
  category,
}: UseCoursesQueryProps) => {
  return useQuery({
    queryKey: ["courses", page, pageSize, tenKhoaHoc, category],
    queryFn: () => getPaginatedCourse({ page, pageSize, tenKhoaHoc }),
    enabled: category === "all",
  });
};
