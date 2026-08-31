import { Pagination } from "@shared/table";

import { USER_ENROLLMENT_STATUS } from "../constants";
import { useCourseEnrollmentContext } from "../contexts";
import type { EnrollmentUser } from "../types";
import { CourseEnrollmentEmptyState } from "./CourseEnrollmentEmptyState";
import { CourseEnrollmentSkeleton } from "./CourseEnrollmentSkeleton";
import { CoursesEnrollmentTableFooter } from "./CoursesEnrollmentTableFooter";
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
      return <CourseEnrollmentSkeleton />;
    }
    if (isUserEmpty) {
      return <CourseEnrollmentEmptyState />;
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
    <div className="flex flex-col gap-8">
      <div className="w-full rounded-container border border-border-subtle bg-bg-default shadow-surface select-none md:max-w-200">
        <table className="w-full table-fixed border-collapse">
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
      <CoursesEnrollmentTableFooter />
    </div>
  );
};
