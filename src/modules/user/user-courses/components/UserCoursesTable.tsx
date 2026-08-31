import { COURSE_ENROLLMENT_STATES } from "../constants";
import { useUserCoursesContext } from "../contexts";
import { EmptyCourseState } from "./EmptyCourseState";
import { UserCoursesTableRow } from "./user-courses-table-row";
import { UserCoursesSkeleton } from "./UserCoursesSkeleton";

export const UserCoursesTable = () => {
  const {
    userCourses,
    status: { isCourseEmpty, isLoading },
  } = useUserCoursesContext();

  const createTableContent = () => {
    if (isLoading) {
      return <UserCoursesSkeleton />;
    }
    if (isCourseEmpty) {
      return <EmptyCourseState />;
    }

    return userCourses?.map((course, index) => {
      const isEnrolled = course.trangThai === COURSE_ENROLLMENT_STATES.ENROLLED;

      return (
        <UserCoursesTableRow
          key={index}
          stt={index + 1}
          course={course}
          isEnrolled={isEnrolled}
        />
      );
    });
  };
  return (
    <table className="w-full table-fixed border-collapse">
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
