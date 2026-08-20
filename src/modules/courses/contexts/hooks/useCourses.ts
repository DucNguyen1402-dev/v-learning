import { mockCourses } from "@modules/courses/mocks";

import { useCoursesQuery } from "./useCoursesQuery";

function findOrThrow<T>(value: T | undefined): T {
  if (!value) throw new Error("Not found");
  return value;
}

export const useCourses = () => {
  const { data: courses = [], isPending, isSuccess } = useCoursesQuery();

  const upgradeCourses = courses.map((course) => {
    const matchedCourse = findOrThrow(
      mockCourses.find(
        (c) =>
          c.maDanhMucKhoahoc ===
          course.danhMucKhoaHoc.maDanhMucKhoahoc.toLowerCase(),
      ),
    );

    const { maDanhMucKhoahoc: _, ...rest } = matchedCourse;

    const upgradeCourse = {
      ...course,
      ...rest,
    };

    return upgradeCourse;
  });

  return { courses: upgradeCourses, isPending, isSuccess };
};

export type UseCoursesReturn = ReturnType<typeof useCourses>;
