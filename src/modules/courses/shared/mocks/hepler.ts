import { findOrThrow } from "@shared/utils";

import type { Course, EnrichedCourse } from "../types";
import { mockCourses } from "./mockCourses";

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

    return {
      ...course,
      ...rest,
    };
  });
