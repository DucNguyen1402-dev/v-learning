import { Navigation } from "@shared/navigation";
import { Pagination } from "@shared/table";

import { CoursesEnrollmentTable } from "../components";
import { useCourseEnrollmentContext } from "../contexts";

export const CourseEnrollmentPage = () => {
  const { scrollRef } = Navigation.hooks.useScrollOnRouteChange();
  const { enrollmentUsers, maKhoaHoc, tenKhoaHoc } =
    useCourseEnrollmentContext();

  return (
    <div className="min-h-screen pt-5">
      <div
        className="flex scroll-target items-center justify-center gap-4"
        ref={scrollRef}
      >
        <div className="flex flex-col items-center gap-1.5 text-center">
          <h1 className="text-lg font-semibold tracking-wide uppercase md:text-xl">
            Danh sách học viên
          </h1>
          <span className="inline-flex items-center gap-1 rounded-pill border border-border-subtle bg-bg-subtle px-3 py-1 text-xs font-medium md:text-sm">
            {tenKhoaHoc} ({maKhoaHoc})
          </span>
        </div>
      </div>
      <div className="mt-6 flex justify-center">
        <Pagination.Provider
          items={enrollmentUsers}
          resetDeps={[enrollmentUsers]}
        >
          <CoursesEnrollmentTable />
        </Pagination.Provider>
      </div>
    </div>
  );
};
