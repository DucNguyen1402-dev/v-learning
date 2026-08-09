export const accountValidationRules = {
  taiKhoan: {
    required: "Vui lòng nhập tài khoản.",
    minLength: {
      value: 4,
      message: "Tài khoản phải có ít nhất 4 ký tự.",
    },
    maxLength: {
      value: 20,
      message: "Tài khoản không được vượt quá 20 ký tự.",
    },
    pattern: {
      value: /^[a-zA-Z0-9_]+$/,
      message: "Tài khoản chỉ được chứa chữ cái, số và dấu gạch dưới (_).",
    },
  },

  matKhau: {
    required: "Vui lòng nhập mật khẩu.",
    minLength: {
      value: 6,
      message: "Mật khẩu phải có ít nhất 6 ký tự.",
    },
    maxLength: {
      value: 50,
      message: "Mật khẩu không được vượt quá 50 ký tự.",
    },
  },
} as const;
