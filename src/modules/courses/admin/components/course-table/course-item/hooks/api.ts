import { api } from "@shared/api";

export const deleteCourse = (maKhoaHoc: string) =>
  api.delete(`/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKhoaHoc}`);
