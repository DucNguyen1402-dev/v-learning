export const updateUserValidation = {
  hoTen: {
    required: "Vui lòng nhập họ và tên",
    minLength: {
      value: 2,
      message: "Họ và tên phải có ít nhất 2 ký tự",
    },
    maxLength: {
      value: 50,
      message: "Họ và tên không được vượt quá 50 ký tự",
    },
    pattern: {
      value: /^[A-Za-zÀ-ỹ]+(?:[ '-][A-Za-zÀ-ỹ]+)*$/u,
      message: "Họ và tên chỉ được chứa chữ cái, khoảng trắng, dấu ' và -",
    },
    validate: {
      notBlank: (value: string) =>
        value.trim().length > 0 || "Vui lòng nhập họ và tên",

      noMultipleSpaces: (value: string) =>
        !/\s{2,}/.test(value) ||
        "Họ và tên không được chứa nhiều khoảng trắng liên tiếp",
    },
  },
  email: {
    required: "Vui lòng nhập email",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Email không hợp lệ",
    },
  },

  soDT: {
    pattern: {
      value: /^(0|\+84)\d{9}$/,
      message: "Số điện thoại không hợp lệ",
    },
  },
};
