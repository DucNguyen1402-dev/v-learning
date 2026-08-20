import { Pagination } from "@shared/table";

import { CoursesHeader, CoursesList, CoursesToolbar } from "../components";
import { useCoursesContext } from "../contexts";
export const CoursesPage = () => {
  const {
    filter: { filteredCourses, keyword, category },
    state: { isSuccess },
  } = useCoursesContext();

  return (
    <Pagination.Provider
      items={filteredCourses}
      enabled={isSuccess}
      resetDeps={[filteredCourses, keyword, category]}
      entityName="Khóa học"
      pageSize={12}
    >
      <div className="flex min-h-screen flex-col gap-10">
        <div className="flex flex-col gap-10 p-container md:p-container-md lg:p-container-lg">
          <CoursesHeader />
          <CoursesToolbar />
        </div>
        <div className="flex flex-col gap-16">
          <CoursesList />
          <div className="">
            <Pagination.Control />
          </div>
        </div>
      </div>
    </Pagination.Provider>
  );
};
