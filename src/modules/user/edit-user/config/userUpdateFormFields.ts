import type { UpdateUserFormData } from "../types";

export const userUpdateFormFields = [
  { label: "Họ và tên", name: "hoTen", type: "text" },
  { label: "Email", name: "email", type: "email" },
  { label: "Số điện thoại", name: "soDT", type: "number" },
] as const satisfies ReadonlyArray<{
  label: string;
  name: keyof UpdateUserFormData;
  type: "text" | "password" | "email" | "number";
}>;
