import type { UpdateCoursePayload } from "@modules/courses/admin/course-edit/types";
import { api } from "@shared/api";
export const updateCourse = async (data: UpdateCoursePayload) => {
  return api.post("/QuanLyKhoaHoc/CapNhatKhoaHoc", data);
};
