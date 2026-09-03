import { useCallback, useEffect, useRef } from "react";

import { useCoursesContext } from "@modules/courses/shared/contexts";
import { TableEmptyState } from "@shared/table";
import { Pagination } from "@shared/table";

import { CourseTableRow } from "./course-table-row";
import { CourseTableSkeleton } from "./CourseTableSkeleton";

type CoursesTableProps = {
  affectedCourseId?: string;
};

export const CoursesTable = ({ affectedCourseId }: CoursesTableProps) => {
  const {
    processedCourses,
    allCourses,
    status: { isLoading },
    pagination,
    isSourceByCategory,
  } = useCoursesContext();
  const hasMoveToPage = useRef(false);

  const paginationCategory = Pagination.use();

  const targetPagination = isSourceByCategory ? paginationCategory : pagination;

  if (affectedCourseId) {
    targetPagination.actions.preventNextResetPage();
  }

  const moveToMoviePage = useCallback(
    (maKhoaHoc: string) => {
      const courseIndex = allCourses?.findIndex((course) => {
        return course.maKhoaHoc === maKhoaHoc;
      });
      if (courseIndex === -1 || courseIndex === undefined) return;

      const coursePage =
        Math.floor(courseIndex / targetPagination.state.pageSize) + 1;

      targetPagination.actions.setPage(coursePage);
    },
    [targetPagination, allCourses],
  );

  useEffect(() => {
    if (!affectedCourseId || isLoading || hasMoveToPage.current) return;
    moveToMoviePage(affectedCourseId);
    hasMoveToPage.current = true;
  }, [affectedCourseId, isLoading, moveToMoviePage]);

  const renderTableContent = () => {
    if (isLoading) {
      return <CourseTableSkeleton />;
    }
    const isEmpty = !processedCourses || processedCourses.length === 0;
    if (isEmpty) {
      return (
        <TableEmptyState
          colSpan={8}
          title="Không tìm thấy khóa học!"
          description="Hãy thử lại với từ khóa khác."
          actionHandler={() => {}}
        />
      );
    }

    return processedCourses.map((course) => (
      <CourseTableRow
        key={course.maKhoaHoc}
        course={course}
        isRecentlyAffected={course.maKhoaHoc === affectedCourseId}
      />
    ));
  };

  return (
    <div className="scrollbar table-wrapper-min-height overflow-x-auto rounded-container border border-border-subtle bg-bg-default shadow-surface select-none">
      <table className="min-w-310 table-fixed border-collapse text-left">
        <thead>
          <tr className="bg-bg-subtle text-xs font-medium tracking-wider text-text-subtle uppercase">
            <th className="w-25 py-8 pl-8">Mã</th>
            <th className="w-55 pl-8">Tên Khóa học</th>
            <th className="w-45 pl-8">Danh mục</th>
            <th className="w-30 pl-8">Người tạo</th>
            <th className="w-30 pl-8">Ngày tạo</th>
            <th className="w-25 text-center">Học viên</th>
            <th className="w-25 text-center">Đánh giá</th>
            <th className="w-40 pl-4 text-center">Thao tác</th>
          </tr>
        </thead>

        <tbody>{renderTableContent()}</tbody>
      </table>
    </div>
  );
};
