import type { UpdatePayload } from "./types";

export const UPDATE_FIELDS = [
  "hoTen",
  "email",
  "soDT",
  "matKhau",
  "taiKhoan",
  "maLoaiNguoiDung",
  "maNhom",
] as const satisfies readonly (keyof UpdatePayload)[];
