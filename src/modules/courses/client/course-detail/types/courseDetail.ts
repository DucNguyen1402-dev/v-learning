import type { EnrichedCourse } from "@modules/courses/shared/types";

import type { MockCourseDetail } from "../mocks";

import type { MockCourse } from "@/modules/courses/shared/mocks";

export type CourseDetail = EnrichedCourse &
  Omit<MockCourse, "maDanhMucKhoahoc"> &
  MockCourseDetail;
