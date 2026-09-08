import type { LoginData } from "@modules/login/types";
import { api } from "@shared/api";
export type LoginResponse = {
  accessToken: string;
  taiKhoan: string;
  hoTen: string;
  email: string;
  soDT: string;
  maNhom: string;
  maLoaiNguoiDung: string;
};

export const login = (payload: LoginData) =>
  api
    .post<LoginResponse>("/QuanLyNguoiDung/DangNhap", payload)
    .then((res) => res.data);
