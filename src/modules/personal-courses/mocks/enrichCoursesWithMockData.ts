import type { PersonalCourse } from "../types";
import { mockCourses } from "./mockCourses";
import type { EnrichedPersonalCourse } from "./types";

export const enrichCoursesWithMockData = (
  courses: PersonalCourse[],
): EnrichedPersonalCourse[] => {
  return courses.map((course) => ({
    ...course,
    ...mockCourses[Math.floor(Math.random() * mockCourses.length)],
  }));
};
