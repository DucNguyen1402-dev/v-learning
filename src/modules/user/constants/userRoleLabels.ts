import type { UserRole } from "../types";
export const USER_ROLE_LABELS = {
  HV: "Học viên",
  GV: "Giảng viên",
} as const satisfies Record<UserRole, string>;
