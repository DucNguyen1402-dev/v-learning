import { api } from "@shared/api";

export const deleteCourse = (taiKhoan: string) =>
  api.delete(`/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`);
