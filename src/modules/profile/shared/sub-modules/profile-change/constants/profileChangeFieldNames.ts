import type { ProfileChangeFormValues } from "../types";

export const PROFILE_CHANGE_FIELD_NAMES = {
  NAME: "hoTen",
  EMAIL: "email",
  PHONE: "soDT",
} as const satisfies Record<string, keyof ProfileChangeFormValues>;
