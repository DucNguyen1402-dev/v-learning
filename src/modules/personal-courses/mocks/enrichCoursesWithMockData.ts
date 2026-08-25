import type { EnrichedPersonalCourse, PersonalCourse } from "../types";
import { mockCourses } from "./mockCourses";

export const enrichCoursesWithMockData = (
  courses: PersonalCourse[],
): EnrichedPersonalCourse[] => {
  return courses.map((course) => ({
    ...course,
    ...mockCourses[Math.floor(Math.random() * mockCourses.length)],
  }));
};
