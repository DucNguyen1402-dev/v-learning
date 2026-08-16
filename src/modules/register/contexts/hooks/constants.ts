export const REGISTER_FIELD_NAMES = {
  taiKhoan: "taiKhoan",
  matKhau: "matKhau",
  hoTen: "hoTen",
  email: "email",
  soDT: "soDT",
  maNhom: "maNhom",
} as const;
export const REGISTER_FIELD_KEYS = [
  "taiKhoan",
  "matKhau",
  "hoTen",
  "email",
  "soDT",
  "maNhom",
] as const;
export type RegisterFieldNames = keyof typeof REGISTER_FIELD_NAMES;
