import type { MockCourse } from "@modules/courses/mocks";
export type MockCourseDetail = MockCourse & {
  price: number;
  seatRemaining: number;
  deadlineHours: number;
  hasPromotion: boolean;
};
