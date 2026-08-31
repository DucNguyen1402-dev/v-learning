import type { EnrollmentState } from "../types";
export const COURSE_ENROLLMENT_STATES: Record<string, EnrollmentState> = {
  ENROLLED: "enrolled",
  PENDING: "pending",
} as const;
