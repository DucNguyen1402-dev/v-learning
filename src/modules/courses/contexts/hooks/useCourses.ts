import { mockCourses } from "@modules/courses/mocks";

import { useCoursesQuery } from "./useCoursesQuery";

function findOrThrow<T>(value: T | undefined): T {
  if (!value) throw new Error("Not found");
  return value;
}

export const useCourses = () => {
  const {
    data: courses = { items: [] },
    isPending,
    isSuccess,
  } = useCoursesQuery({ page: 1, pageSize: 10 });

  const { currentPage, count, totalPages, totalCount, items } = courses;

  const upgradeCourses = items.map((course) => {
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
