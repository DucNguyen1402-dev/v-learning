import type { EnrollmentStatus } from "../types";
export const USER_ENROLLMENT_STATUS: Record<string, EnrollmentStatus> = {
  ENROLLED: "Đã đăng ký",
  PENDING: "Chờ xác nhận",
} as const;
