import type { MockCourse } from "../mocks";

import type { EnrolledCourse } from "@/shared/auth/userInfor";
export type PersonalCourse = EnrolledCourse;

export type EnrichedPersonalCourse = PersonalCourse &
  Omit<MockCourse, "maDanhMucKhoahoc">;
