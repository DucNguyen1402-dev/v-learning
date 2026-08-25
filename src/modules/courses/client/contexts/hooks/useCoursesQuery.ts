import { getPaginatedCourse } from "@modules/courses/api";
import { useQuery } from "@tanstack/react-query";
type UseCoursesQueryProps = {
  page: number;
  pageSize: number;
  tenKhoaHoc: string;
  category: string;
};
export const useCoursesQuery = ({
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
