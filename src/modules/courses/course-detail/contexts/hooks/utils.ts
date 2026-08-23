import { mockEnrichedCourseDetail } from "@modules/courses/course-detail/mocks";
import type { Course } from "@modules/courses/types";
export const enrichCourseDetail = (courseDetail: Course) => {
  return {
    ...courseDetail,
    ...mockEnrichedCourseDetail.find(
      (enrichedCourse) =>
        enrichedCourse.maDanhMucKhoahoc ===
        courseDetail.danhMucKhoaHoc.maDanhMucKhoahoc.toLowerCase(),
    )!,
  };
};
