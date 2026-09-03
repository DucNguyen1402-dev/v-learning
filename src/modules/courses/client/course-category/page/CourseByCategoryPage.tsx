import { useParams } from "react-router-dom";

import { Navigation } from "@shared/navigation";
import { Pagination } from "@shared/table";

import { CoursesFooter, CoursesHeader, CoursesList } from "../components";
import { useCourseCategoryContext } from "../context";

import type { Category } from "@/modules/courses/shared/types";

export const CourseByCategoryPage = () => {
  const { coursesByCategory, isPending, isEpmty } = useCourseCategoryContext();
  const { maDanhMuc } = useParams<{ maDanhMuc: Category }>();

  Navigation.hooks.useScrollOnRouteChange();
  return (
    <Pagination.Provider
      items={coursesByCategory}
      resetDeps={[coursesByCategory]}
    >
      <div className="flex min-h-screen flex-col gap-10">
        <CoursesHeader maDanhMuc={maDanhMuc!} />

        <CoursesList isLoading={isPending} isEmpty={isEpmty} />
        <CoursesFooter isLoading={isPending} />
      </div>
    </Pagination.Provider>
  );
};
