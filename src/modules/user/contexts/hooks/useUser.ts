import { usePaginatedUserQuery, useUsersQuery } from "@modules/user/hooks";
import { Pagination } from "@shared/table";
import { UserProfile } from "@shared/user-profile";

import { useUserFilterByRole } from "./useUserFilterByRole";
import { useUserSearchByName } from "./useUserSearchByName";

export function useUser() {
  const { data: allUsers } = useUsersQuery();
  const {
    pagination,
    setPagination,
    isFirstRender,
    scrollToTargetRef,
    skipNextPageResetRef,
    setSkipNextPageResetRef,
  } = Pagination.hooks.useState();

  const { role, onChangeRole, filteredUsers } = useUserFilterByRole({
    allUsers,
  });
  const { keyword, onSearchByUserName, handleClearSearch } =
    useUserSearchByName();

  const isLocalPagination = role !== null;

  const {
    data: paginatedUserData,
    isPending: isPendingByPaginated,
    isFetching: isFetchingByPaginated,
  } = usePaginatedUserQuery({
    page: pagination.page,
    pageSize: pagination.pageSize,
    role,
    tuKhoa: keyword,
  });

  const isEmpty = !isPendingByPaginated && paginatedUserData.items.length === 0;
  const {
    onPrevClick,
    onNextClick,
    onPageClick,
    setSize,
    setPage,
    preventNextResetPage,
  } = Pagination.hooks.useActions({
    pagination,
    setPagination,
  });

  // The last page is empty, so subtract 1 from totalPages to avoid showing it.
  const {
    displayStart,
    displayEnd,
    pageNumbers,
    isPrevDisabled,
    isNextDisabled,
  } = Pagination.hooks.useDerived({
    currentPage: pagination.page,
    pageSize: pagination.pageSize,
    totalPages: paginatedUserData.totalPages - 1,
  });

  Pagination.hooks.useEffect({
    setPagination,
    currentPage: pagination.page,
    totalPages: paginatedUserData.totalPages,
    resetDeps: [],
    pageSize: pagination.pageSize,
    isFirstRender,
    scrollToTargetRef,
    skipNextPageResetRef,
    setSkipNextPageResetRef,
  });

  const isLoading = isPendingByPaginated || isFetchingByPaginated;

  const targetCourses = isLocalPagination
    ? filteredUsers
    : paginatedUserData.items;

  const { profile } = UserProfile.use();

  const processedUsers = targetCourses.filter(
    (user) => user.taiKhoan !== profile.taiKhoan,
  );
  return {
    processedUsers,
    allUsers,
    isLocalPagination,
    status: {
      isLoading,
      isEmpty,
    },
    filter: {
      role,
      keyword,
      onChangeRole,
      onSearchByUserName,
      handleClearSearch,
    },
    pagination: {
      refs: {
        scrollToTarget: scrollToTargetRef,
      },
      state: {
        currentPage: pagination.page,
        pageSize: pagination.pageSize,
        displayStart,
        displayEnd,
        pageNumbers,
        isPrevDisabled,
        isNextDisabled,
        totalItems: paginatedUserData.totalCount,
      },
      actions: {
        onPrevClick,
        onNextClick,
        onPageClick,
        setSize,
        setPage,
        preventNextResetPage,
      },
    },
  };
}

export type returnUseUser = ReturnType<typeof useUser>;
