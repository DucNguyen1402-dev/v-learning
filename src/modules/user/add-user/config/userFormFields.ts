import type { UserPayload } from "@modules/user/types";

export const userFormFields = [
  { label: "Họ và tên", name: "hoTen", type: "text" },
  { label: "Tài khoản", name: "taiKhoan", type: "text" },
  { label: "Mật khẩu", name: "matKhau", type: "password" },
  { label: "Email", name: "email", type: "email" },
  { label: "Số điện thoại", name: "soDT", type: "number" },
] as const satisfies ReadonlyArray<{
  label: string;
  name: keyof UserPayload;
  type: "text" | "password" | "email" | "number";
}>;
