import { Navigation } from "@shared/navigation";
import { Pagination } from "@shared/table";

import {
  CoursesFooter,
  CoursesHeader,
  CoursesList,
  CoursesToolbar,
} from "../components";
import { useCoursesContext } from "../contexts";

export const CoursesPage = () => {
  const { courses } = useCoursesContext();

  Navigation.hooks.useScrollOnRouteChange();
  return (
    <Pagination.Provider items={courses} resetDeps={[courses]}>
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
