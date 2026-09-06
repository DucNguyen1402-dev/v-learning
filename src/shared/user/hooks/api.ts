import { api } from "@shared/api";

import type { EnrolledCourse } from "../types";
export type UserInforResponse = {
  hoTen: string;
  email: string;
  soDT: string;
  taiKhoan: string;
  maLoaiNguoiDung: string;
  maNhom: string;
  chiTietKhoaHocGhiDanh: EnrolledCourse[];
  matKhau: string;
};

export const getCurrentUser = async (): Promise<UserInforResponse> => {
  const response = await api.post("/QuanLyNguoiDung/ThongTinNguoiDung");
  return response.data;
};
