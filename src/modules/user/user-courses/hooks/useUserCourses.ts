import {
  useEnrolledCoursesQuery,
  usePendingEnrollmentCoursesQuery,
} from "./internal";

export const useUserCourses = (taiKhoan: string) => {
  const { data: enrolledCoursesQuery } = useEnrolledCoursesQuery(taiKhoan);
  const { data: pendingEnrollmentCoursesQuery } =
    usePendingEnrollmentCoursesQuery(taiKhoan);

  const userCourses = {
    ...enrolledCoursesQuery?.map((course) => ({
      ...course,
      state: "enrolled",
    })),
    ...pendingEnrollmentCoursesQuery?.map((course) => ({
      ...course,
      state: "pending",
    })),
  };

  return {
    enrolledCoursesQuery,
    pendingEnrollmentCoursesQuery,
    userCourses,
  };
};
