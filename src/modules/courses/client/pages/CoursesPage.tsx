import { CoursesFooter } from "@modules/courses/shared/components";
import { useCoursesContext } from "@modules/courses/shared/contexts";
import { Navigation } from "@shared/navigation";
import { Pagination } from "@shared/table";

import { CoursesHeader, CoursesList, CoursesToolbar } from "../components";

export const CoursesPage = () => {
  const { processedCourses, isSourceByCategory } = useCoursesContext();

  const localPaginationSource = isSourceByCategory ? processedCourses : [];
  Navigation.hooks.useScrollOnRouteChange();
  return (
    <Pagination.Provider
      items={localPaginationSource}
      resetDeps={[localPaginationSource]}
    >
      <div className="flex min-h-screen flex-col gap-10">
        <div className="flex flex-col gap-10 p-container md:p-container-md lg:p-container-lg">
          <CoursesHeader />
          <CoursesToolbar />
        </div>

        <CoursesList />

        <div className="mt-8">
          <CoursesFooter />
        </div>
      </div>
    </Pagination.Provider>
  );
};
