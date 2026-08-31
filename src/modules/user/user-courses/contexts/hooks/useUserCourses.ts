import { COURSE_ENROLLMENT_STATUS } from "@modules/user/user-courses/constants";
import type { UserCourse } from "@modules/user/user-courses/types";

import {
  useEnrolledCoursesQuery,
  usePendingEnrollmentCoursesQuery,
} from "./internal";

export const useUserCourses = (taiKhoan: string) => {
  const { data: enrolledCourses, isPending: isPendingEnrolled } =
    useEnrolledCoursesQuery(taiKhoan);
  const {
    data: pendingEnrollmentCourses,
    isPending: isPendingPendingEnrollment,
  } = usePendingEnrollmentCoursesQuery(taiKhoan);

  const userCourses: UserCourse[] = [
    ...(enrolledCourses?.map((course) => ({
      ...course,
      trangThai: COURSE_ENROLLMENT_STATUS.ENROLLED,
    })) ?? []),

    ...(pendingEnrollmentCourses?.map((course) => ({
      ...course,
      trangThai: COURSE_ENROLLMENT_STATUS.PENDING,
    })) ?? []),
  ];

  const isCourseEmpty = userCourses.length === 0;
  return {
    userCourses,
    taiKhoan,
    status: {
      isLoading: isPendingEnrolled || isPendingPendingEnrollment,
      isCourseEmpty,
    },
  };
};

export type UserCoursesHookResult = ReturnType<typeof useUserCourses>;
