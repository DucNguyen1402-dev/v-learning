export const coursesFormRules = {
  tenKhoaHoc: {
    required: "Tên khóa học không được để trống",
    minLength: {
      value: 3,
      message: "Tên khóa học phải có ít nhất 3 ký tự",
    },
    maxLength: {
      value: 100,
      message: "Tên khóa học không được vượt quá 100 ký tự",
    },
  },

  moTa: {
    required: "Mô tả không được để trống",
    minLength: {
      value: 10,
      message: "Mô tả phải có ít nhất 10 ký tự",
    },
    maxLength: {
      value: 500,
      message: "Mô tả không được vượt quá 500 ký tự",
    },
  },
} as const;
