import { createMockEnrichedCourseDetail } from "@modules/courses/client/course-detail/mocks";
import type { CourseDetail } from "@modules/courses/client/course-detail/types";
import { mockCourses } from "@modules/courses/shared/mocks";
import type { Course } from "@modules/courses/shared/types";

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
