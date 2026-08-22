import type { Category } from "@modules/courses/types";
import { api } from "@shared/api";
export const getCoursesByCategory = async (category: Category | "all") =>
  await api
    .get(
      `QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${category}&MaNhom=GP01`,
    )
    .then((res) => res.data);
