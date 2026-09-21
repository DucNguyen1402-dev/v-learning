import type { EnrollmentStatus } from "../types";
export const USER_ENROLLMENT_STATUS: Record<string, EnrollmentStatus> = {
  ENROLLED: "registered",
  PENDING: "pending",
} as const;
