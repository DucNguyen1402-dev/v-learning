import type { EnrollmentStatus } from "../types";
export const COURSE_ENROLLMENT_STATUS: Record<string, EnrollmentStatus> = {
  ENROLLED: "đã đăng ký",
  PENDING: "chờ xác nhận",
} as const;
