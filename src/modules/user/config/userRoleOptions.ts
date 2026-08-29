import type { UserRole } from "../types";
export const userRoleOptions = [
  { value: "GV", label: "Giáo vụ" },
  { value: "HV", label: "Học viên" },
] as const satisfies ReadonlyArray<{ value: UserRole; label: string }>;
