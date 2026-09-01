import { PASSWORD_CHANGE_FIELD_NAMES } from "../constants";

export const passwordChangeFields = [
  {
    name: PASSWORD_CHANGE_FIELD_NAMES.CURRENT_PASSWORD,
    label: "Mật khẩu hiện tại",
    requiredRules: "Mật khẩu hiện tại là bắt buộc",
  },
  {
    name: PASSWORD_CHANGE_FIELD_NAMES.NEW_PASSWORD,
    label: "Mật khẩu mới",
    requiredRules: "Mật khẩu mới là bắt buộc",
  },
  {
    name: PASSWORD_CHANGE_FIELD_NAMES.CONFIRM_PASSWORD,
    label: "Xác nhận mật khẩu",
    requiredRules: "Xác nhận mật khẩu là bắt buộc",
  },
];
