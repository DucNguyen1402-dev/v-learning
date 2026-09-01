import { EMPTY_COURSE, useCourseDetailQuery } from "@modules/courses/shared";

import { EMPTY_UNENROLLED_USERS } from "./constants";
import { useSearchUser } from "./useSearchUser";
import { useUnenrollUsersQuery } from "./useUnenrollUsersQuery";
type UseEnrollUserParams = {
  maKhoaHoc: string;
};
export const useEnrollUser = ({ maKhoaHoc }: UseEnrollUserParams) => {
  const {
    data: unenrolledUsers = EMPTY_UNENROLLED_USERS,
    isPending: isUnenrolledUsersPending,
    isFetching: isUnenrolledUsersFetching,
  } = useUnenrollUsersQuery({ maKhoaHoc });

  const {
    data: courseDetail = EMPTY_COURSE,
    isPending: isCourseDetailPending,
    isFetching: isCourseDetailFetching,
  } = useCourseDetailQuery(maKhoaHoc);

  const { keyword, handleSearch, filteredUsers } = useSearchUser({
    unenrolledUsers,
  });

  const isLoading =
    isUnenrolledUsersPending ||
    isUnenrolledUsersFetching ||
    isCourseDetailPending ||
    isCourseDetailFetching;

  const isFilteredUsersEmpty = filteredUsers.length === 0;

  return {
    unenrolledUsers: filteredUsers,

    status: {
      isLoading,
    },
    maKhoaHoc,
    courseDetail,
    filter: { keyword, handleSearch, isFilteredUsersEmpty },
  };
};

export type UseEnrollUserReturn = ReturnType<typeof useEnrollUser>;
