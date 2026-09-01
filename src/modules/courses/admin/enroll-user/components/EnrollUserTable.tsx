import {
  EnrollmentEmptyState,
  EnrollmentSkeleton,
  EnrollmentTableFooter,
} from "@modules/courses/admin/shared/components";
import { Pagination } from "@shared/table";

import { useEnrollUserContext } from "../context";
import type { UnenrolledUser } from "../types";
import { EnrollUserTableRow } from "./enroll-user-table-row";
import { SearchUnenrolledUserBar } from "./SearchUnenrolledUserBar";

export const EnrollUserTable = () => {
  const {
    status: { isLoading },
    courseDetail,
    filter: { isFilteredUsersEmpty, keyword },
  } = useEnrollUserContext();

  const {
    state: { paginatedList, pageSize },
  } = Pagination.use<UnenrolledUser>();

  const createTableContent = () => {
    if (isLoading) {
      return <EnrollmentSkeleton rowNumber={pageSize} />;
    }
    if (isFilteredUsersEmpty) {
      return (
        <EnrollmentEmptyState
          title="Không có người dùng nào."
          subtitle={`Người dùng với từ khóa "${keyword}" không tồn tại hoặc đã đăng ký khóa học.`}
          colSpan={4}
        />
      );
    }

    return paginatedList?.map((user, index) => {
      return (
        <EnrollUserTableRow
          key={index}
          stt={index + 1}
          user={user}
          maKhoaHoc={courseDetail.maKhoaHoc}
        />
      );
    });
  };
  return (
    <div className="flex w-full flex-col gap-10 md:max-w-200">
      <div className="flex w-full flex-col gap-4 self-center select-none md:max-w-150">
        <SearchUnenrolledUserBar />
        <div className="min-h-120 overflow-x-auto rounded-container border border-border-subtle bg-bg-default shadow-surface">
          <table className="w-full min-w-140 table-fixed border-collapse">
            <thead>
              <tr className="bg-bg-subtle text-xs font-medium tracking-wider text-text-subtle uppercase">
                <th className="w-20 py-5 pl-8 text-left">STT</th>
                <th className="w-45 pl-4 text-left">Tài khoản</th>
                <th className="w-40 pl-4 text-left">Tên học viên</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>{createTableContent()}</tbody>
          </table>
        </div>
      </div>
      <EnrollmentTableFooter isLoading={isLoading} />
    </div>
  );
};
