import type { UserRole } from "./userRole";
export type User = {
  readonly taiKhoan: string;
  hoTen: string;
  email: string;
  soDt: string;
  readonly maLoaiNguoiDung: UserRole;
};

export type UserPayload = Readonly<{
  taiKhoan: string;
  matKhau: string;
  hoTen: string;
  soDT: string;
  maLoaiNguoiDung: string;
  email: string;
  maNhom: string;
}>;
