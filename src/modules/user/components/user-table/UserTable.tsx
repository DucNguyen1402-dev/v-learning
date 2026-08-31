import { useCallback, useEffect, useRef } from "react";

import { useUserContext } from "@modules/user/contexts";
import type { User } from "@modules/user/types";
import { TableEmptyState } from "@shared/table";
import { Pagination } from "@shared/table";

import { UserRow } from "./user-row";
import { UserTableSkeleton } from "./UserTableSkeleton";

type UserTableProps = {
  isSidebarOpen: boolean;
  affectedUserAccount?: string;
};

export const UserTable = ({
  isSidebarOpen,
  affectedUserAccount,
}: UserTableProps) => {
  const {
    processedUsers,
    isLocalPagination,
    status: { isLoading, isEmpty },
    filter: { handleClearSearch },
    pagination,
    allUsers,
  } = useUserContext();

  const localPagination = Pagination.use<User>();

  const renderUserList = isLocalPagination
    ? localPagination.state.paginatedList
    : processedUsers;
  const hasMoveToPage = useRef(false);

  const targetPagination = isLocalPagination ? localPagination : pagination;

  if (affectedUserAccount) {
    targetPagination.actions.preventNextResetPage();
  }

  const moveToUserPage = useCallback(
    (taiKhoan: string) => {
      const userIndex = allUsers?.findIndex((user) => {
        return user.taiKhoan === taiKhoan;
      });

      if (userIndex === -1 || userIndex === undefined) return;

      const userPage =
        Math.floor(userIndex / targetPagination.state.pageSize) + 1;

      targetPagination.actions.setPage(userPage);
    },
    [targetPagination, allUsers],
  );

  useEffect(() => {
    if (!affectedUserAccount || isLoading || hasMoveToPage.current) return;
    moveToUserPage(affectedUserAccount);
    hasMoveToPage.current = true;
  }, [affectedUserAccount, isLoading, moveToUserPage]);

  const renderTableContent = () => {
    if (isLoading) {
      return <UserTableSkeleton />;
    }
    if (isEmpty) {
      return (
        <TableEmptyState
          colSpan={8}
          title="Không tìm thấy người dùng!"
          description="Hãy thử lại với từ khóa khác."
          actionHandler={handleClearSearch}
        />
      );
    }

    return renderUserList.map((user) => (
      <UserRow
        key={user.taiKhoan}
        user={user}
        isRecentlyAffected={user.taiKhoan === affectedUserAccount}
      />
    ));
  };

  return (
    <div className="flex-1 overflow-x-auto rounded-container border border-border-subtle bg-bg-default shadow-surface select-none">
      <table className="w-full table-fixed border-collapse text-left">
        <thead>
          <tr className="bg-bg-subtle text-xs font-medium tracking-wider text-text-subtle uppercase">
            <th
              className={
                isSidebarOpen
                  ? "3xl:w-35 w-35 py-8 pl-8 lg:w-40 2xl:w-45"
                  : "3xl:w-40 w-40 py-8 pl-8 lg:w-45 2xl:w-50"
              }
            >
              Tài khoản
            </th>
            <th
              className={
                isSidebarOpen
                  ? "3xl:w-95 w-40 px-4 lg:w-45 2xl:w-40"
                  : "3xl:w-100 w-45 px-4 lg:w-50 2xl:w-45"
              }
            >
              Họ tên
            </th>
            <th
              className={
                isSidebarOpen
                  ? "3xl:w-55 w-50 px-4 lg:w-55"
                  : "3xl:w-60 w-55 px-4 lg:w-60"
              }
            >
              Email
            </th>
            <th
              className={
                isSidebarOpen ? "3xl:w-55 w-30 px-4" : "3xl:w-60 w-35 px-4"
              }
            >
              SDT
            </th>
            <th
              className={`text-center ${
                isSidebarOpen
                  ? "3xl:w-55 w-25 px-4 2xl:w-30"
                  : "3xl:w-60 w-30 px-4 2xl:w-35"
              }`}
            >
              Vai trò
            </th>

            <th
              className={`text-center ${
                isSidebarOpen
                  ? "3xl:w-50 w-35 px-4 2xl:w-40"
                  : "3xl:w-50 w-40 px-4 2xl:w-45"
              }`}
            >
              Thao tác
            </th>
          </tr>
        </thead>

        <tbody>{renderTableContent()}</tbody>
      </table>
    </div>
  );
};
