import type { CourseStatus } from "./types";

export const courseStatusLabel = {
  not_started: "chưa bắt đầu",
  in_progress: "đang học",
  completed: "hoàn thành",
} as const satisfies Record<CourseStatus, string>;
