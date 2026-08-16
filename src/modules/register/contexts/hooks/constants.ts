export const REGISTER_FIELD_NAMES = {
  TAI_KHOAN: "taiKhoan",
  MAT_KHAU: "matKhau",
  HO_TEN: "hoTen",
  EMAIL: "email",
  SO_DT: "soDT",
  MA_NHOM: "maNhom",
} as const;
export const REGISTER_FIELD_NAME_VALUES = Object.values(REGISTER_FIELD_NAMES);
export type RegisterFieldNames = typeof REGISTER_FIELD_NAMES;
