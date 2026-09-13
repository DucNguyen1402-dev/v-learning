import { useEffect } from "react";

import { usePaginatedUserQuery, useUsersQuery } from "@modules/user/hooks";
import { Pagination } from "@shared/table";

import { useUserFilterByRole } from "./useUserFilterByRole";
import { useUserSearchByName } from "./useUserSearchByName";

import { CurrentUser } from "@/shared/current-user";

export function useUser() {
  const { data: allUsers } = useUsersQuery();

  const { role, onChangeRole, filteredUsers } = useUserFilterByRole({
    allUsers,
  });
  const { keyword, onSearchByUserName, handleClearSearch } =
    useUserSearchByName();

  const isLocalPagination = role !== null;
  const pagination = Pagination.hooks.usePagination();

  const {
    data: paginatedUserData,
    isPending: isPendingByPaginated,
    isFetching: isFetchingByPaginated,
  } = usePaginatedUserQuery({
    page: pagination.state.currentPage,
    pageSize: pagination.state.pageSize,
    role,
    tuKhoa: keyword,
  });

  const isLoading = isPendingByPaginated || isFetchingByPaginated;
  const isEmpty = !isPendingByPaginated && paginatedUserData.items.length === 0;

  const { updateMeta } = pagination;
  useEffect(() => {
    updateMeta({
      totalPage: paginatedUserData.totalPages,
      enabledResetPage: false,
      enabledScrollToTarget: !isLoading,
    });
  }, [updateMeta, paginatedUserData.totalPages, isLoading]);

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
        ...pagination.ref,
      },
      state: {
        ...pagination.state,
        totalItems: paginatedUserData.totalCount,
      },
      actions: {
        ...pagination.actions,
      },
    },
  };
}

export type returnUseUser = ReturnType<typeof useUser>;
