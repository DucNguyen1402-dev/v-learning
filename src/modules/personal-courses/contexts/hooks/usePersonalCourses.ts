import { useMemo } from "react";

import { enrichCoursesWithMockData } from "@modules/personal-courses/mocks";

import { useUserCourseInfo } from "../../hooks";

export const usePersonalCourses = () => {
  const { courses, isPending } = useUserCourseInfo();

  const enrichedCourses = useMemo(
    () => enrichCoursesWithMockData(courses),
    [courses],
  );
  return {
    courses: enrichedCourses,
    isPending,
  };
};

export type UsePersonalCoursesReturn = ReturnType<typeof usePersonalCourses>;
