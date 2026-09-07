import { api } from "@shared/api";

import type { CurrentUserEnrolledCourse } from "./types";
export type CurrentUserInforResponse = {
  hoTen: string;
  email: string;
  soDT: string;
  taiKhoan: string;
  maLoaiNguoiDung: string;
  maNhom: string;
  chiTietKhoaHocGhiDanh: CurrentUserEnrolledCourse[];
  matKhau: string;
};

export const getCurrentUser = async (): Promise<CurrentUserInforResponse> => {
  const response = await api.post("/QuanLyNguoiDung/ThongTinNguoiDung");
  return response.data;
};
