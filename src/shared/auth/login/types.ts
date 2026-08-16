import type { LoginData } from "@modules/login";
export type LoginFn = ({
  payload,
  remember,
}: {
  payload: LoginData;
  remember: boolean;
}) => Promise<LoginResponse>;

export type LoginResponse = {
  accessToken: string;
  taiKhoan: string;
  hoTen: string;
  email: string;
  soDT: string;
  maNhom: string;
  maLoaiNguoiDung: string;
};
