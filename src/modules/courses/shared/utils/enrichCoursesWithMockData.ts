import { findOrThrow } from "@shared/utils";

import { mockCourses } from "../mocks";
import type { Course, EnrichedCourse } from "../types";

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

    const {
      maDanhMucKhoahoc: _,
      descriptionImage: _2,
      ...rest
    } = matchedCourse;

    const enrichedCourse = {
      ...course,
      ...rest,
    };

    return enrichedCourse;
  });
