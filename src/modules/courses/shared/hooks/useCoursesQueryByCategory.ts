import { useQuery } from "@tanstack/react-query";

import { getCoursesByCategory } from "../api";
import type { Category } from "../types";
type UseCoursesQueryByCategoryParams = {
  category: Category | null;
};
export const useCoursesQueryByCategory = ({
  category,
}: UseCoursesQueryByCategoryParams) => {
  return useQuery({
    queryKey: ["courses-by-category", category],
    queryFn: () => getCoursesByCategory(category),
    enabled: category !== null,
  });
};
