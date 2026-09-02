import { Navigation } from "@shared/navigation";
import { Pagination } from "@shared/table";

import { CoursesFooter, CoursesHeader, CoursesList } from "../components";
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
        <CoursesHeader />

        <CoursesList isLoading={isPending} isEmpty={isEpmty} />
        <CoursesFooter isLoading={isPending} />
      </div>
    </Pagination.Provider>
  );
};
