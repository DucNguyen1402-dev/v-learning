import { useCourseDetailQuery } from "@modules/courses";
import { USER_ENROLLMENT_STATUS } from "@modules/courses/admin/course-enrollment/constants";
import type { EnrollmentUser } from "@modules/courses/admin/course-enrollment/types";

import {
  useEnrolledUsersQuery,
  usePendingEnrollmentUsersQuery,
} from "./internal";

export const useCourseEnrollment = (maKhoaHoc: string) => {
  const { data: courseDetail } = useCourseDetailQuery(maKhoaHoc);
  const { data: enrolledUsers, isLoading: isPendingEnrolled } =
    useEnrolledUsersQuery(maKhoaHoc);
  const {
    data: pendingEnrollmentUsers,
    isLoading: isPendingPendingEnrollment,
  } = usePendingEnrollmentUsersQuery(maKhoaHoc);

  const enrollmentUsers: EnrollmentUser[] = [
    ...(enrolledUsers?.map((course) => ({
      ...course,
      trangThai: USER_ENROLLMENT_STATUS.ENROLLED,
    })) ?? []),

    ...(pendingEnrollmentUsers?.map((course) => ({
      ...course,
      trangThai: USER_ENROLLMENT_STATUS.PENDING,
    })) ?? []),
  ];

  const isUserEmpty = enrollmentUsers.length === 0;
  return {
    enrollmentUsers,
    maKhoaHoc,
    tenKhoaHoc: courseDetail?.tenKhoaHoc ?? "Unknown Course",
    status: {
      isLoading: isPendingEnrolled || isPendingPendingEnrollment,
      isUserEmpty,
    },
  };
};

export type CourseEnrollmentHookResult = ReturnType<typeof useCourseEnrollment>;
