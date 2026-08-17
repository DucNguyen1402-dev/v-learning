import type { RegisterFieldNames } from "../types";

export const REGISTER_FIELD_NAMES = {
  TAI_KHOAN: "taiKhoan",
  MAT_KHAU: "matKhau",
  HO_TEN: "hoTen",
  EMAIL: "email",
  SO_DT: "soDT",
  MA_NHOM: "maNhom",
} as const as RegisterFieldNames;
export const REGISTER_FIELD_NAME_VALUES = Object.values(REGISTER_FIELD_NAMES);
