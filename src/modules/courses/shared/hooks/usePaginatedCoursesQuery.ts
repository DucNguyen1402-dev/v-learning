import { useQuery } from "@tanstack/react-query";

import { getPaginatedCourse } from "../api";
import type { Category } from "../types";
type UseCoursesQueryProps = {
  page: number;
  pageSize: number;
  tenKhoaHoc: string;
  category: Category | null;
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
    enabled: category === null,
    refetchOnWindowFocus: false,
  });
};
