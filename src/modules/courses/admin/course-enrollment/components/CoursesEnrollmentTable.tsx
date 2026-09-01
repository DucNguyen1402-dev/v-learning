import {
  EnrollmentEmptyState,
  EnrollmentSkeleton,
  EnrollmentTableFooter,
} from "@modules/courses/admin/shared/components";
import { Pagination } from "@shared/table";

import { USER_ENROLLMENT_STATUS } from "../constants";
import { useCourseEnrollmentContext } from "../contexts";
import type { EnrollmentUser } from "../types";
import { EnrollmentUserTableRow } from "./enrollment-user-table-row";

export const CoursesEnrollmentTable = () => {
  const {
    status: { isUserEmpty, isLoading },
  } = useCourseEnrollmentContext();

  const {
    state: { paginatedList },
  } = Pagination.use<EnrollmentUser>();

  const createTableContent = () => {
    if (isLoading) {
      return <EnrollmentSkeleton />;
    }
    if (isUserEmpty) {
      return (
        <EnrollmentEmptyState
          title="Không có học viên."
          subtitle="Hiện tại khóa học chưa có học viên ghi danh."
          colSpan={5}
        />
      );
    }

    return paginatedList?.map((user, index) => {
      const isEnrolled = user.trangThai === USER_ENROLLMENT_STATUS.ENROLLED;

      return (
        <EnrollmentUserTableRow
          key={index}
          stt={index + 1}
          user={user}
          isEnrolled={isEnrolled}
        />
      );
    });
  };
  return (
    <div className="flex w-full flex-col items-center gap-8">
      <div className="min-h-140 w-full overflow-x-auto rounded-container border border-border-subtle bg-bg-default shadow-surface select-none md:max-w-165">
        <table className="w-full min-w-160 table-fixed border-collapse">
          <thead>
            <tr className="bg-bg-subtle text-xs font-medium tracking-wider text-text-subtle uppercase">
              <th className="w-20 py-5 pl-8 text-left">STT</th>
              <th className="pl-4 text-left">Tài khoản</th>
              <th className="pl-4 text-left">Tên học viên</th>
              <th className="pl-4 text-center">Trạng thái</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>{createTableContent()}</tbody>
        </table>
      </div>
      <div className="w-full md:max-w-200">
        <EnrollmentTableFooter isLoading={isLoading} />
      </div>
    </div>
  );
};
