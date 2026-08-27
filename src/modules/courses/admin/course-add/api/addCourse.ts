import { api } from "@shared/api";

import type { AddCoursePayload } from "../types";
export const addCourse = async (data: AddCoursePayload) =>
  api.post("/QuanLyKhoaHoc/ThemKhoaHoc", data);
