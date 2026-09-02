import { useCallback, useEffect, useRef } from "react";

import { useUserContext } from "@modules/user/contexts";
import type { User } from "@modules/user/types";
import { TableEmptyState } from "@shared/table";
import { Pagination } from "@shared/table";

import { UserRow } from "./user-row";
import { UserTableSkeleton } from "./UserTableSkeleton";

type UserTableProps = {
  affectedUserAccount?: string;
};

export const UserTable = ({ affectedUserAccount }: UserTableProps) => {
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
          colSpan={6}
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
            <th className="w-35 py-8 pl-8">Tài khoản</th>
            <th className="w-40 pl-4">Họ tên</th>
            <th className="w-55 pl-4">Email</th>
            <th className="w-30 pl-4">SDT</th>
            <th className="w-30 pl-4 text-center 2xl:w-30">Vai trò</th>

            <th className="w-40 pl-4 text-center 2xl:w-40">Thao tác</th>
          </tr>
        </thead>

        <tbody>{renderTableContent()}</tbody>
      </table>
    </div>
  );
};
