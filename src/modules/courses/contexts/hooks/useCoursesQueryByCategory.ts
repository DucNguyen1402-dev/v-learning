import type { Category } from "@modules/courses/types";
import { useQuery } from "@tanstack/react-query";

import { getCoursesByCategory } from "./api";
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
