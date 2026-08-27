import { useCourseQuery } from "@modules/courses/shared/hooks";
import { TableEmptyState } from "@shared/table";

import { CourseItem } from "./CourseItem";
import { CourseTableSkeleton } from "./CourseTableSkeleton";

export const CoursesTable = ({ isSidebarOpen }: { isSidebarOpen: boolean }) => {
  const { data: courseData, isPending } = useCourseQuery();

  const renderTableContent = () => {
    if (isPending) {
      return <CourseTableSkeleton />;
    }
    const isEmptyMovieList = !courseData || courseData.length === 0;
    if (isEmptyMovieList) {
      return (
        <TableEmptyState
          colSpan={8}
          title="Không tìm thấy khóa học!"
          description="Hãy thử lại với từ khóa khác."
          actionHandler={() => {}}
        />
      );
    }

    return courseData
      .slice(0, 10)
      .map((course) => <CourseItem key={course.maKhoaHoc} course={course} />);
  };

  return (
    <div className="flex-1 overflow-hidden rounded-container border border-border-subtle bg-bg-default shadow-surface">
      <table className="w-full table-fixed border-collapse text-left">
        <thead>
          <tr className="bg-bg-subtle text-xs font-medium tracking-wider text-text-subtle uppercase">
            <th
              className={
                isSidebarOpen
                  ? "3xl:w-30 py-8 pl-8 2xl:w-25"
                  : "3xl:w-30 py-8 pl-4 2xl:w-30"
              }
            >
              Mã
            </th>
            <th
              className={
                isSidebarOpen
                  ? "3xl:w-60 px-4 2xl:w-45"
                  : "3xl:w-60 px-4 2xl:w-50"
              }
            >
              Khóa học
            </th>
            <th
              className={
                isSidebarOpen
                  ? "3xl:w-50 px-4 2xl:w-45"
                  : "3xl:w-50 px-4 2xl:w-50"
              }
            >
              Danh mục
            </th>
            <th
              className={
                isSidebarOpen
                  ? "3xl:w-50 px-4 2xl:w-45"
                  : "3xl:w-50 px-4 2xl:w-50"
              }
            >
              Người tạo
            </th>
            <th
              className={
                isSidebarOpen
                  ? "3xl:w-50 px-4 2xl:w-35"
                  : "3xl:w-50 px-4 2xl:w-40"
              }
            >
              Ngày tạo
            </th>
            <th
              className={
                isSidebarOpen
                  ? "3xl:w-50 px-4 2xl:w-25"
                  : "3xl:w-50 px-4 2xl:w-30"
              }
            >
              Học viên
            </th>
            <th
              className={
                isSidebarOpen
                  ? "3xl:w-50 px-4 2xl:w-25"
                  : "3xl:w-50 px-4 2xl:w-30"
              }
            >
              Đánh giá
            </th>
            <th
              className={
                isSidebarOpen
                  ? "3xl:w-50 px-4 2xl:w-35"
                  : "3xl:w-50 px-4 2xl:w-40"
              }
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
