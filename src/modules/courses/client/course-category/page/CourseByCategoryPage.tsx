import { CoursesFooter } from "@modules/courses/shared/components";
import { Navigation } from "@shared/navigation";
import { Pagination } from "@shared/table";

import { CoursesList } from "../components";
import { useCourseCategoryContext } from "../context";

export const CourseByCategoryPage = () => {
  const { coursesByCategory, isPending, isEpmty } = useCourseCategoryContext();

  Navigation.hooks.useScrollOnRouteChange();
  return (
    <Pagination.Provider
      items={coursesByCategory}
      resetDeps={[coursesByCategory]}
    >
      <div className="flex min-h-screen flex-col gap-10">
        {/* <div className="flex flex-col gap-10 p-container md:p-container-md lg:p-container-lg">
          <CoursesHeader />
          <CoursesToolbar />
        </div> */}

        <CoursesList isLoading={isPending} isEmpty={isEpmty} />

        <div className="mt-8">
          <CoursesFooter />
        </div>
      </div>
    </Pagination.Provider>
  );
};
