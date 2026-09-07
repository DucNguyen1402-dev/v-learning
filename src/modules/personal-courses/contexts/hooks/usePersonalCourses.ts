import { useMemo } from "react";

import { enrichCoursesWithMockData } from "@modules/personal-courses/mocks";
import { CurrentUser } from "@shared/current-user";

export const usePersonalCourses = () => {
  const { enrolledCourse } = CurrentUser.use();

  const enrichedCourses = useMemo(
    () => enrichCoursesWithMockData(enrolledCourse.list),
    [enrolledCourse.list],
  );
  return {
    courses: enrichedCourses,
  };
};

export type UsePersonalCoursesReturn = ReturnType<typeof usePersonalCourses>;
