import { createMockEnrichedCourseDetail } from "@modules/courses/course-detail/mocks";
import type { CourseDetail } from "@modules/courses/course-detail/types";
import { mockCourses } from "@modules/courses/mocks";
import type { Course } from "@modules/courses/types";

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
