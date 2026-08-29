import type { UserRole } from "./userRole";
export type User = {
  taiKhoan: string;
  hoTen: string;
  email: string;
  soDt: string;
  maLoaiNguoiDung: UserRole;
};
