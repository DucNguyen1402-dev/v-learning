import type { ThemeValue } from "@shared/theme";

export type LoginPayload = {
  taiKhoan: string;
  matKhau: string;
};

export type LoginResponse = {
  accessToken: string;
  taiKhoan: string;
  hoTen: string;
  email: string;
  soDT: string;
  maNhom: string;
  maLoaiNguoiDung: string;
};

export type LoginFn = ({
  payload,
  remember,
}: {
  payload: LoginPayload;
  remember: boolean;
}) => Promise<LoginResponse>;

export type CurrentUser = {
  taiKhoan: string;
  email: string;
  hoTen: string;
  soDT: string;
  theme?: ThemeValue;
};
