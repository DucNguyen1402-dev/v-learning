export type RegisterData = {
  taiKhoan: string;
  matKhau: string;
  hoTen: string;
  email: string;
  soDT?: string;
  maNhom: string;
};
export type RegisterFieldNames = Record<string, keyof RegisterData>;
