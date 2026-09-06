import type { UserPayload } from "@modules/user/types";

export type UpdateUserFormData = Pick<
  UserPayload,
  "hoTen" | "soDT" | "email" | "maLoaiNguoiDung"
>;
