import { useCourseDetailQuery } from "@modules/courses";

import { USER_ENROLLMENT_STATUS } from "../../constants";
import type { EnrollmentUser } from "../../types";
import {
  useEnrolledUsersQuery,
  usePendingEnrollmentUsersQuery,
} from "./internal";
import { useEnrollmentUserSearch } from "./useEnrollmentUserSearch";

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
  const { keyword, handleSearch, filteredUsers } = useEnrollmentUserSearch({
    unenrolledUsers: enrollmentUsers,
  });
  const isFilteredUserEmpty = filteredUsers.length === 0;
  return {
    allEnrollmentUsers: enrollmentUsers,
    enrollmentUsers: filteredUsers,
    filter: {
      keyword,
      handleSearch,
    },
    maKhoaHoc,
    tenKhoaHoc: courseDetail?.tenKhoaHoc ?? "Unknown Course",
    status: {
      isLoading: isPendingEnrolled || isPendingPendingEnrollment,
      isUserEmpty,
      isFilteredUserEmpty,
    },
  };
};

export type CourseEnrollmentHookResult = ReturnType<typeof useCourseEnrollment>;
