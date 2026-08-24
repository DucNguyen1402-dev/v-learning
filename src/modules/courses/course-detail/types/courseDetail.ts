import type { MockCourse } from "@modules/courses/mocks";
import type { EnrichedCourse } from "@modules/courses/types";

import type { MockCourseDetail } from "../mocks";

export type CourseDetail = EnrichedCourse &
  Omit<MockCourse, "maDanhMucKhoahoc"> &
  MockCourseDetail;
