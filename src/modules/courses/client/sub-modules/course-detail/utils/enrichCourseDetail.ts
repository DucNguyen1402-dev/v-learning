import { mockCourses } from "@modules/courses/shared/mocks";
import type { Course } from "@modules/courses/shared/types";

import { createMockEnrichedCourseDetail } from "../mocks";
import type { CourseDetail } from "../types";

export const enrichCourseDetail = (courseDetail: Course): CourseDetail => {
  const matchingCourse = mockCourses.find(
    (course) =>
      course.maDanhMucKhoahoc ===
      courseDetail.danhMucKhoaHoc.maDanhMucKhoahoc.toLowerCase(),
  )!;

  const { maDanhMucKhoahoc: _, ...enrichedCourse } = matchingCourse ?? {};

  const enrichedCourseDetail = {
    ...courseDetail,
    ...enrichedCourse,
    ...createMockEnrichedCourseDetail(),
  };

  return enrichedCourseDetail;
};
