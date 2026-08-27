import { api } from "@shared/api";

import type { Category } from "../types";
export const getCoursesByCategory = async (category: Category | null) =>
  await api
    .get(
      `QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${category}&MaNhom=GP01`,
    )
    .then((res) => res.data);
