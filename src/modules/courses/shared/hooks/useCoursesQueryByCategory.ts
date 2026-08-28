import { useQuery } from "@tanstack/react-query";

import { getCoursesByCategory } from "../api";
import type { Category, Course } from "../types";
type UseCoursesQueryByCategoryParams = {
  category: Category | null;
};
export const useCoursesQueryByCategory = ({
  category,
}: UseCoursesQueryByCategoryParams) => {
  return useQuery<Course[]>({
    queryKey: ["courses-by-category", category],
    queryFn: () => getCoursesByCategory(category),
    enabled: category !== null,
  });
};
