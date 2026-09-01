import { useCoursesQueryByCategory } from "@modules/courses/shared/hooks";
import type { Category } from "@modules/courses/shared/types";

type UseCourseCategoryParams = {
  category: Category;
};
export const useCourseCategory = ({ category }: UseCourseCategoryParams) => {
  const { data: coursesByCategory } = useCoursesQueryByCategory({ category });

  return {
    coursesByCategory,
  };
};

export type useCourseCategoryReturn = ReturnType<typeof useCourseCategory>;
