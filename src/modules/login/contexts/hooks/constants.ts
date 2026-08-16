export const LOGIN_FORM_FIELD_NAMES = {
  TAI_KHOAN: "taiKhoan",
  MAT_KHAU: "matKhau",
  REMEMBER: "remember",
} as const;

export type LoginFormValues = {
  [LOGIN_FORM_FIELD_NAMES.TAI_KHOAN]: string;
  [LOGIN_FORM_FIELD_NAMES.MAT_KHAU]: string;
  [LOGIN_FORM_FIELD_NAMES.REMEMBER]: boolean;
};

export type LoginFormFieldNames = typeof LOGIN_FORM_FIELD_NAMES;
