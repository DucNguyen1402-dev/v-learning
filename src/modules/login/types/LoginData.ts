export type LoginData = {
  taiKhoan: string;
  matKhau: string;
};

export type LoginFieldNames = Record<string, keyof LoginData>;
