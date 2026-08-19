import type { PasswordChangeFormFieldNames } from "../types";

export const PASSWORD_CHANGE_FIELD_NAMES = {
  CURRENT_PASSWORD: "currentPassword",
  NEW_PASSWORD: "newPassword",
  CONFIRM_PASSWORD: "confirmPassword",
} as const satisfies PasswordChangeFormFieldNames;
