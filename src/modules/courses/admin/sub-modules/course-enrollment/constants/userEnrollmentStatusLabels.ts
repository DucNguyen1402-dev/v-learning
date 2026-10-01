import type { EnrollmentStatus } from "../types";

export const userEnrollmentStatusLabels: Record<EnrollmentStatus, string> = {
  enrolled: "đã ghi danh",
  pending: "chờ xác nhận",
};
