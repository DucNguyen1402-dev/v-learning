import { useMemo } from "react";

import { mockCourses, useCourseQuery } from "@modules/courses/shared";

export const useFeatureCourses = () => {
  const { data: courses, isPending: isLoading } = useCourseQuery();

  const featureCourses = useMemo(
    () =>
      courses?.map((course) => {
        const matchedCourse = mockCourses.find(
          (mockCourse) =>
            mockCourse.maDanhMucKhoahoc ===
            course.danhMucKhoaHoc.maDanhMucKhoahoc.toLowerCase(),
        )!;

        const { maDanhMucKhoahoc: _, ...restCourse } = matchedCourse;
        return {
          ...course,
          ...restCourse,
        };
      }),
    [courses],
  );
  const highestRatingCourses = featureCourses
    ?.filter((course) => course.danhGia >= 4.9)
    .slice(0, 12);

  return {
    highestRatingCourses,
    isLoading,
  };
};
