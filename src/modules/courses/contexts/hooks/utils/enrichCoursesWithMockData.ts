import { mockCourses } from "@modules/courses/mocks";
import type { Course, EnrichedCourse } from "@modules/courses/types";
import { findOrThrow } from "@shared/utils";

export const enrichCoursesWithMockData = (
  courses: Course[],
): EnrichedCourse[] =>
  courses.map((course) => {
    const matchedCourse = findOrThrow(
      mockCourses.find(
        (c) =>
          c.maDanhMucKhoahoc ===
          course.danhMucKhoaHoc.maDanhMucKhoahoc.toLowerCase(),
      ),
    );

    const { maDanhMucKhoahoc: _, ...rest } = matchedCourse;

    const enrichedCourse = {
      ...course,
      ...rest,
    };

    return enrichedCourse;
  });
