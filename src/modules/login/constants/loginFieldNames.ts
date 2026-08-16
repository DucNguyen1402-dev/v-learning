import type { LoginFieldNames } from "../types";

export const LOGIN_FIELD_NAMES = {
  TAI_KHOAN: "taiKhoan",
  MAT_KHAU: "matKhau",
} as const as LoginFieldNames;

export const LoginFieldNamesValues = Object.values(LOGIN_FIELD_NAMES);
