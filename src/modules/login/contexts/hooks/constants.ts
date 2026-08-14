export const LOGIN_FORM_FIELD_NAMES = {
  TAI_KHOAN: "taiKhoan",
  MAT_KHAU: "matKhau",
  REMEMBER: "remember",
} as const;

export type LoginFormValues = Record<
  (typeof LOGIN_FORM_FIELD_NAMES)[keyof typeof LOGIN_FORM_FIELD_NAMES],
  string | boolean
>;

export type LoginFormFieldNames = typeof LOGIN_FORM_FIELD_NAMES;
