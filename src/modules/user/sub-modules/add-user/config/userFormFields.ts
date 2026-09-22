import { USER_FORM_FIELDS } from "./constants";
export const userFormFields = [
  { label: "Họ và tên", name: USER_FORM_FIELDS.HO_TEN, type: "text" },
  { label: "Tài khoản", name: USER_FORM_FIELDS.TAI_KHOAN, type: "text" },
  { label: "Mật khẩu", name: USER_FORM_FIELDS.MAT_KHAU, type: "password" },
  { label: "Email", name: USER_FORM_FIELDS.EMAIL, type: "email" },
  { label: "Số điện thoại", name: USER_FORM_FIELDS.SO_DT, type: "number" },
] as const;
