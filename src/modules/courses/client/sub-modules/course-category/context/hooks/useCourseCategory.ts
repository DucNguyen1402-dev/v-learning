import { useCoursesQueryByCategory } from "@modules/courses/shared/hooks";
import { enrichCoursesWithMockData } from "@modules/courses/shared/mocks";
import type { Category } from "@modules/courses/shared/types";

type UseCourseCategoryParams = {
  category: Category;
};
export const useCourseCategory = ({ category }: UseCourseCategoryParams) => {
  const { data: coursesByCategory = [], isPending } = useCoursesQueryByCategory(
    {
      category,
    },
  );

  const isEpmty = coursesByCategory.length === 0;
  const enrichedCoursesByCategory =
    enrichCoursesWithMockData(coursesByCategory);

  return {
    coursesByCategory: enrichedCoursesByCategory,
    isPending,
    isEpmty,
  };
};

export type useCourseCategoryReturn = ReturnType<typeof useCourseCategory>;
