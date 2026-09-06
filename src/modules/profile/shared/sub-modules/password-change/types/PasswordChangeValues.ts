export type PasswordChangeFormValues = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export type PasswordChangeFormFieldNames = Record<
  string,
  keyof PasswordChangeFormValues
>;
