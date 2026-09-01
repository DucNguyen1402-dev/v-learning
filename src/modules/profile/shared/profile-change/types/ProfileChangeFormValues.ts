import type { UpdatePayload } from "@/shared/auth/update";

export type ProfileChangeFormValues = Pick<
  UpdatePayload,
  "hoTen" | "email" | "soDT"
>;

export type ProfileChangeFormFieldNames = Record<
  string,
  keyof ProfileChangeFormValues
>;
