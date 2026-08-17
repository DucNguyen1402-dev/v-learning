import type { RegisterData } from "@modules/register";
import { api } from "@shared/api";

type RegisterResponse = {
  taiKhoan: string;
  matKhau: string;
  hoTen: string;
  soDT?: string;
  maNhom: string;
  email: string;
};

export const register = (payload: RegisterData): Promise<RegisterResponse> =>
  api.post("/QuanLyNguoiDung/DangKy", payload).then((res) => res.data);
