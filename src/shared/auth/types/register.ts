export type RegisterPayload = {
  taiKhoan: string;
  matKhau: string;
  hoTen: string;
  email: string;
  soDT?: string;
  maNhom: string;
};

export type RegisterResponse = {
  taiKhoan: string;
  matKhau: string;
  hoTen: string;
  soDT?: string;
  maNhom: string;
  email: string;
};

export type RegisterFn = (
  payload: RegisterPayload,
) => Promise<RegisterResponse>;
