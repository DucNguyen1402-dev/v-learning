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
