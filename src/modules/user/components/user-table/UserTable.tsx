// import { useCallback, useEffect, useRef } from "react";

import { useUserContext } from "@modules/user/contexts";

// import { TableEmptyState } from "@shared/table";
// import { Pagination } from "@shared/table";
import { UserRow } from "./user-row";
// import { UserTableSkeleton } from "./UserTableSkeleton";

type UserTableProps = {
  isSidebarOpen: boolean;
  affectedUserAccount?: string;
};

export const UserTable = ({
  isSidebarOpen,
  affectedUserAccount,
}: UserTableProps) => {
  const { users } = useUserContext();
  // const hasMoveToPage = useRef(false);

  // const paginationCategory = Pagination.use();

  // const targetPagination = isSourceByCategory ? paginationCategory : pagination;

  // if (affectedUserAccount) {
  //   targetPagination.actions.preventNextResetPage();
  // }

  // const moveToUserPage = useCallback(
  //   (maNguoiDung: string) => {
  //     const userIndex = allCourses?.findIndex((course) => {
  //       return course.maKhoaHoc === maNguoiDung;
  //     });
  //     if (userIndex === -1 || userIndex === undefined) return;

  //     const userPage =
  //       Math.floor(userIndex / targetPagination.state.pageSize) + 1;

  //     targetPagination.actions.setPage(userPage);
  //   },
  //   [targetPagination, allCourses],
  // );

  // useEffect(() => {
  //   if (!affectedUserAccount || isLoading || hasMoveToPage.current) return;
  //   moveToUserPage(affectedUserAccount);
  //   hasMoveToPage.current = true;
  // }, [affectedUserAccount, isLoading, moveToUserPage]);

  const renderTableContent = () => {
    // if (isLoading) {
    //   return <UserTableSkeleton />;
    // }
    // const isEmpty = !processedCourses || processedCourses.length === 0;
    // if (isEmpty) {
    //   return (
    //     <TableEmptyState
    //       colSpan={8}
    //       title="Không tìm thấy người dùng!"
    //       description="Hãy thử lại với từ khóa khác."
    //       actionHandler={() => {}}
    //     />
    //   );
    // }

    return users
      .slice(0, 10)
      .map((user) => (
        <UserRow
          key={user.taiKhoan}
          user={user}
          isRecentlyAffected={user.taiKhoan === affectedUserAccount}
        />
      ));
  };

  return (
    <div className="select flex-1 overflow-x-auto rounded-container border border-border-subtle bg-bg-default shadow-surface select-none">
      <table className="w-full min-w-200 table-fixed border-collapse text-left">
        <thead className="select-none">
          <tr className="bg-bg-subtle text-xs font-medium tracking-wider text-text-subtle uppercase">
            <th
              className={
                isSidebarOpen
                  ? "3xl:w-35 py-8 pl-8 2xl:w-45"
                  : "3xl:w-40 py-8 pl-8 2xl:w-50"
              }
            >
              Tài khoản
            </th>
            <th
              className={
                isSidebarOpen
                  ? "3xl:w-95 px-4 2xl:w-40"
                  : "3xl:w-100 px-4 2xl:w-45"
              }
            >
              Họ tên
            </th>
            <th
              className={
                isSidebarOpen
                  ? "3xl:w-55 px-4 2xl:w-55"
                  : "3xl:w-60 px-4 2xl:w-60"
              }
            >
              Email
            </th>
            <th
              className={
                isSidebarOpen
                  ? "3xl:w-55 px-4 2xl:w-30"
                  : "3xl:w-60 px-4 2xl:w-35"
              }
            >
              SDT
            </th>
            <th
              className={`text-center ${
                isSidebarOpen
                  ? "3xl:w-55 px-4 2xl:w-30"
                  : "3xl:w-60 px-4 2xl:w-35"
              }`}
            >
              Vai trò
            </th>

            <th
              className={`text-center ${
                isSidebarOpen
                  ? "3xl:w-50 px-4 2xl:w-40"
                  : "3xl:w-50 px-4 2xl:w-45"
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
