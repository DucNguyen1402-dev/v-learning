import type { Course, PaginatedCourse } from "@modules/courses/types";

export const EMPTY_PAGINATED_COURSE: PaginatedCourse = {
  currentPage: 1,
  count: 0,
  totalPages: 0,
  totalCount: 0,
  items: [],
} as const;

export const EMPTY_PAGINATED_COURSE_BY_CATEGORY: Course[] = [];
