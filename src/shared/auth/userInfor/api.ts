import { api } from "@shared/api";

export type UserInforResponse = {
  hoTen: string;
  email: string;
  soDT: string;
  taiKhoan: string;
  maLoaiNguoiDung: string;
  maNhom: string;
  chiTietKhoaHocGhiDanh: unknown[];
  matKhau: string;
};

export const userInfor = async (): Promise<UserInforResponse> => {
  const response = await api.post("/QuanLyNguoiDung/ThongTinNguoiDung");
  return response.data;
};
