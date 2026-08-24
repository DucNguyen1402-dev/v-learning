import { getCoursesByCategory } from "@modules/courses/api";
import type { Category } from "@modules/courses/types";
import { useQuery } from "@tanstack/react-query";
type UseCoursesQueryByCategoryParams = {
  category: Category | "all";
};
export const useCoursesQueryByCategory = ({
  category,
}: UseCoursesQueryByCategoryParams) => {
  return useQuery({
    queryKey: ["courses-by-category", category],
    queryFn: () => getCoursesByCategory(category),
    enabled: category !== "all",
  });
};
