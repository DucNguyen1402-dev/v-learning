import { COURSE_ENROLLMENT_STATES } from "../constants";
import {
  useEnrolledCoursesQuery,
  usePendingEnrollmentCoursesQuery,
} from "./internal";

export const useUserCourses = (taiKhoan: string) => {
  const { data: enrolledCoursesQuery, isPending: isPendingEnrolled } =
    useEnrolledCoursesQuery(taiKhoan);
  const { data: pendingEnrollmentCoursesQuery, isPending: isPendingPending } =
    usePendingEnrollmentCoursesQuery(taiKhoan);

  const userCourses = [
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
    isCourseEmpty,
    isLoading: isPendingEnrolled || isPendingPending,
  };
};
