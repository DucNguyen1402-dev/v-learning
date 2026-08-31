export const userValidationRules = {
  taiKhoan: {
    required: "Vui lòng nhập tài khoản",
  },

  matKhau: {
    required: "Vui lòng nhập mật khẩu",
    minLength: {
      value: 6,
      message: "Mật khẩu tối thiểu 6 ký tự",
    },
  },

  hoTen: {
    required: "Vui lòng nhập họ tên",
  },

  soDT: {
    required: "Vui lòng nhập số điện thoại",
    pattern: {
      value: /^\d{10,11}$/,
      message: "Số điện thoại không hợp lệ",
    },
  },

  maLoaiNguoiDung: {
    required: "Vui lòng chọn loại người dùng",
  },

  maNhom: {
    required: "Vui lòng chọn mã nhóm",
  },

  email: {
    required: "Vui lòng nhập email",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Email không hợp lệ",
    },
  },
} as const;
