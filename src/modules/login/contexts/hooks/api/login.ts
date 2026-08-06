import { api } from "@shared/api";

type LoginPayload = {
  taiKhoan: string;
  matKhau: string;
};

type LoginResponse = {
  accessToken: string;
  taiKhoan: string;
  hoTen: string;
  email: string;
  soDT: string;
  maNhom: string;
  maLoaiNguoiDung: string;
};

export const login = (payload: LoginPayload) =>
  api
    .post<LoginResponse>("/QuanLyNguoiDung/DangNhap", payload)
    .then((res) => res.data);
