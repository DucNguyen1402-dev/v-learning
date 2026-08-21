import type { Courses } from "@modules/courses/types";
import { api } from "@shared/api";

export const getCourse = () =>
  api
    .get<Courses[]>("/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01")
    .then((res) => res.data);
