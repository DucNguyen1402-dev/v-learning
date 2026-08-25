import { api } from "@shared/api";

import type { Course } from "../types";
export const getCourses = () =>
  api
    .get<Course[]>(`/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01`)
    .then((res) => res.data);
