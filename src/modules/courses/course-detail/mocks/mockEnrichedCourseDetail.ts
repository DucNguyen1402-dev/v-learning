import { mockCourses } from "@modules/courses/mocks";

import type { MockCourseDetail } from "./types";
const randomBoolean = () => Math.random() > 0.5;

const randomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const mockEnrichedCourseDetail: MockCourseDetail[] = mockCourses.map(
  (course) => ({
    ...course,
    price: randomNumber(100, 1000),
    hasPromotion: randomBoolean(),
    seatRemaining: randomNumber(0, 20),
    deadlineHours: randomNumber(1, 72),
  }),
);
