import { Pagination } from "@shared/table";

import { COURSE_ENROLLMENT_STATUS } from "../constants";
import { useUserCoursesContext } from "../contexts";
import type { UserCourse } from "../types";
import { EmptyCourseState } from "./EmptyCourseState";
import { UserCoursesTableRow } from "./user-courses-table-row";
import { UserCoursesSkeleton } from "./UserCoursesSkeleton";

export const UserCoursesTable = () => {
  const {
    status: { isCourseEmpty, isLoading },
  } = useUserCoursesContext();

  const pagination = Pagination.use<UserCourse>();

  const createTableContent = () => {
    if (isLoading) {
      return <UserCoursesSkeleton />;
    }
    if (isCourseEmpty) {
      return <EmptyCourseState />;
    }

    return pagination.state.paginatedList.map((course, index) => {
      const isEnrolled = course.trangThai === COURSE_ENROLLMENT_STATUS.ENROLLED;

      return (
        <UserCoursesTableRow
          key={index}
          stt={index + 1 + pagination.state.pageOffset}
          course={course}
          isEnrolled={isEnrolled}
        />
      );
    });
  };
  return (
    <table className="w-full min-w-125 table-fixed border-collapse">
      <thead>
        <tr className="bg-bg-subtle text-xs font-medium tracking-wider text-text-subtle uppercase">
          <th className="w-20 py-5 pl-8 text-left">STT</th>
          <th className="pl-4 text-left">Tên Khóa học</th>
          <th className="pl-4 text-center">Trạng thái</th>
          <th className="pl-4 text-center">Thao tác</th>
        </tr>
      </thead>
      <tbody>{createTableContent()}</tbody>
    </table>
  );
};
