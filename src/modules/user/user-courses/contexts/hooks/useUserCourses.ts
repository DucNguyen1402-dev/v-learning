import { COURSE_ENROLLMENT_STATES } from "@modules/user/user-courses/constants";
import type { UserCourse } from "@modules/user/user-courses/types";

import {
  useEnrolledCoursesQuery,
  usePendingEnrollmentCoursesQuery,
} from "./internal";

export const useUserCourses = (taiKhoan: string) => {
  const { data: enrolledCoursesQuery, isPending: isPendingEnrolled } =
    useEnrolledCoursesQuery(taiKhoan);
  const { data: pendingEnrollmentCoursesQuery, isPending: isPendingPending } =
    usePendingEnrollmentCoursesQuery(taiKhoan);

  const userCourses: UserCourse[] = [
    ...(enrolledCoursesQuery?.map((course) => ({
      ...course,
      trangThai: COURSE_ENROLLMENT_STATES.ENROLLED,
    })) ?? []),

    ...(pendingEnrollmentCoursesQuery?.map((course) => ({
      ...course,
      trangThai: COURSE_ENROLLMENT_STATES.PENDING,
    })) ?? []),
  ];

  const isCourseEmpty = userCourses.length === 0;
  return {
    userCourses,
    taiKhoan,
    status: {
      isLoading: isPendingEnrolled || isPendingPending,
      isCourseEmpty,
    },
  };
};

export type UserCoursesHookResult = ReturnType<typeof useUserCourses>;
