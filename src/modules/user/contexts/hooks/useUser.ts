import { usePaginatedUserQuery, useUsersQuery } from "@modules/user/hooks";
import { Pagination } from "@shared/table";

import { useUserFilterByRole } from "./useUserFilterByRole";
import { useUserSearchByName } from "./useUserSearchByName";

import { CurrentUser } from "@/shared/current-user";

export function useUser() {
  const { data: allUsers } = useUsersQuery();
  const {
    currentPage,
    pageSize,
    resetPaginationPage,
    onPrevClick,
    onNextClick,
    onPageClick,
    setSize,
    setPage,
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
    page: currentPage,
    pageSize,
    role,
    tuKhoa: keyword,
  });

  const isEmpty = !isPendingByPaginated && paginatedUserData.items.length === 0;

  // The last page is empty, so subtract 1 from totalPages to avoid showing it.
  const {
    displayStart,
    displayEnd,
    pageNumbers,
    isPrevDisabled,
    isNextDisabled,
  } = Pagination.hooks.useDerived({
    currentPage,
    pageSize,
    totalPages: paginatedUserData.totalPages - 1,
  });

  const { scrollToTargetRef, skipNextPageReset } = Pagination.hooks.useEffect({
    currentPage,
    totalPages: paginatedUserData.totalPages,
    pageSize,
    resetPaginationPage,
    resetDeps: [],
  });

  const isLoading = isPendingByPaginated || isFetchingByPaginated;

  const targetCourses = isLocalPagination
    ? filteredUsers
    : paginatedUserData.items;

  const { profile } = CurrentUser.use();

  const processedUsers = targetCourses.filter(
    (user) => user.taiKhoan !== profile.current.taiKhoan,
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
        currentPage,
        pageSize,
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
        skipNextPageReset,
      },
    },
  };
}

export type returnUseUser = ReturnType<typeof useUser>;
