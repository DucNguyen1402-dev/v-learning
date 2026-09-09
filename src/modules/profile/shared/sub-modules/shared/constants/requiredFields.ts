import type { UpdatePayload } from "../types/uploadPayload";

export const REQUIRED_FIELDS = [
  "hoTen",
  "email",
  "soDT",
  "matKhau",
  "taiKhoan",
  "maLoaiNguoiDung",
  "maNhom",
] as const satisfies readonly (keyof UpdatePayload)[];
