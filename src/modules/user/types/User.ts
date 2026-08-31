import type { UserRole } from "./userRole";
export type User = {
  taiKhoan: string;
  hoTen: string;
  email: string;
  soDt: string;
  maLoaiNguoiDung: UserRole;
};

export type UserPayload = {
  taiKhoan: string;
  matKhau: string;
  hoTen: string;
  soDT: string;
  maLoaiNguoiDung: string;
  email: string;
  maNhom: string;
};
