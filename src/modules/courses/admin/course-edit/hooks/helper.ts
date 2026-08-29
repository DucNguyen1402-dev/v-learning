import type { CourseFormData } from "@modules/courses/admin/shared/types";
import type { Course } from "@modules/courses/shared/types";

export const getCourseFormData = (courseDetail: Course): CourseFormData => {
  return {
    tenKhoaHoc: courseDetail.tenKhoaHoc,
    moTa: courseDetail.moTa,
    hinhAnh: [],
    maDanhMucKhoaHoc: courseDetail.danhMucKhoaHoc.maDanhMucKhoahoc,
  };
};
