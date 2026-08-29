import type { CoursePayload } from "@modules/courses/admin/shared/types";
import { api } from "@shared/api";
export const addCourse = async (data: CoursePayload) =>
  api.post("/QuanLyKhoaHoc/ThemKhoaHoc", data);
