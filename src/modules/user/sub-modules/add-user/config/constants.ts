import type { UserPayload } from "@modules/user/types";

export const USER_FORM_FIELDS = {
  TAI_KHOAN: "taiKhoan",
  MAT_KHAU: "matKhau",
  HO_TEN: "hoTen",
  SO_DT: "soDT",
  MA_LOAI_NGUOI_DUNG: "maLoaiNguoiDung",
  EMAIL: "email",
  MA_NHOM: "maNhom",
} as const satisfies Record<string, keyof UserPayload>;
