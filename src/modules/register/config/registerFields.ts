import { REGISTER_FIELD_NAMES } from "../constants";

export const registerFields = [
  {
    label: "TÀI KHOẢN",
    name: REGISTER_FIELD_NAMES.TAI_KHOAN,
    type: "text",
    required: true,
  },
  {
    label: "MẬT KHẨU",
    name: REGISTER_FIELD_NAMES.MAT_KHAU,
    type: "password",
    required: true,
  },
  {
    label: "HỌ VÀ TÊN",
    name: REGISTER_FIELD_NAMES.HO_TEN,
    type: "text",
    required: true,
  },
  {
    label: "EMAIL",
    name: REGISTER_FIELD_NAMES.EMAIL,
    type: "email",
    required: true,
  },
  {
    label: "SỐ ĐIỆN THOẠI",
    name: REGISTER_FIELD_NAMES.SO_DT,
    type: "number",
    required: false,
  },
];
