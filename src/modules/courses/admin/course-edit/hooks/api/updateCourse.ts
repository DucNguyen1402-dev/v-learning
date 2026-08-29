import type { CoursePayload } from "@modules/courses/admin/shared/types";
import { api } from "@shared/api";
export const updateCourse = async (data: CoursePayload) => {
  return api.put("/QuanLyKhoaHoc/CapNhatKhoaHoc", data);
};
