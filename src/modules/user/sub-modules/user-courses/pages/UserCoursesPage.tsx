import { Navigation } from "@shared/navigation";
import { Pagination } from "@shared/table";

import { UserCoursesTable, UserCourseTableFooter } from "../components";
import { useUserCoursesContext } from "../contexts";

export const UserCoursesPage = () => {
  const {
    taiKhoan,
    userCourses,
    status: { isLoading },
  } = useUserCoursesContext();

  const { scrollRef } = Navigation.hooks.useScrollOnRouteChange();

  return (
    <div className="min-h-screen pt-5">
      <div className="flex items-center justify-center gap-4">
        <h1 className="text-center text-lg font-semibold md:text-xl">
          Danh sách khóa học của người dùng:{" "}
          <span className="font-bold underline underline-offset-4">
            {taiKhoan}
          </span>
        </h1>
      </div>
      <Pagination.Provider items={userCourses} resetDeps={[userCourses]}>
        <div className="mt-6 flex flex-col items-center gap-16">
          <div
            className="min-h-130 w-full scroll-target overflow-x-auto rounded-container border border-border-subtle bg-bg-default shadow-surface select-none md:max-w-130"
            ref={scrollRef}
          >
            <UserCoursesTable />
          </div>

          <div className="w-full max-w-xl">
            <UserCourseTableFooter isLoading={isLoading} />
          </div>
        </div>
      </Pagination.Provider>
    </div>
  );
};
