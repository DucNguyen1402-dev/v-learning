import type { EnrollmentStatus } from "../types";
export const COURSE_ENROLLMENT_STATUS: Record<string, EnrollmentStatus> = {
  ENROLLED: "đã ghi danh",
  PENDING: "chờ xác nhận",
} as const;
