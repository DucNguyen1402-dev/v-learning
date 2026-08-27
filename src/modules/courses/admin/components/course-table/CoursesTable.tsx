import { useCourseQuery } from "@modules/courses/shared/hooks";
import { TableEmptyState } from "@shared/table";

import { CourseItem } from "./CourseItem";

export const CoursesTable = () => {
  const { data: courseData } = useCourseQuery();

  const renderTableContent = () => {
    const isEmptyMovieList = !courseData || courseData.length === 0;
    if (isEmptyMovieList) {
      return (
        <TableEmptyState
          colSpan={4}
          title="No Data"
          description="There is no data available at the moment."
          actionHandler={() => {}}
        />
      );
    }

    return courseData.map((course) => (
      <CourseItem key={course.maKhoaHoc} course={course} />
    ));
  };

  return (
    <div className="flex min-h-screen flex-col space-y-8">
      <div className="flex-1 overflow-hidden rounded-lg border border-slate-800/80 bg-[#1e293b] shadow-xl">
        <table className="w-full table-fixed border-collapse text-left">
          <thead>
            <tr className="bg-slate-900/80 text-sm font-medium tracking-wider text-slate-400 uppercase">
              <th className="3xl:w-30 py-8 pl-8 2xl:w-20">Mã khóa học</th>
              <th className="3xl:w-120 px-4 2xl:w-100">Khóa học</th>
              <th className="3xl:w-50 px-4 2xl:w-40">Danh mục</th>
              <th className="3xl:w-50 px-4 2xl:w-40">Người tạo</th>
              <th className="3xl:w-50 px-4 2xl:w-40">Ngày tạo</th>
              <th className="3xl:w-50 px-4 2xl:w-40">Học viên</th>
              <th className="3xl:w-50 px-4 2xl:w-40">Đánh giá</th>
              <th className="3xl:w-50 px-4 2xl:w-40">Thao tác</th>
            </tr>
          </thead>

          <tbody className="text-sm">{renderTableContent()}</tbody>
        </table>
      </div>
    </div>
  );
};
