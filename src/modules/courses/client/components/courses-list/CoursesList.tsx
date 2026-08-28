import { useCoursesContext } from "@modules/courses/shared/contexts";
import { Pagination } from "@shared/table";
import { createArray } from "@shared/utils";

import { CourseCard } from "./CourseCard";
import { CoursesListSkeleton } from "./CoursesListSkeleton";
import { EmptyCoursesState } from "./EmptyCoursesState";

import type { CourseCardForm } from "@/modules/courses/shared/types";

export function CoursesList() {
  const {
    pagination: {
      status: { isEmpty },
    },
    status: { isLoading },
    filter: { tenKhoaHoc, handleClearSearch },
    processedCourses,
    isSourceByCategory,
  } = useCoursesContext();
  const categoryPagination = Pagination.use<CourseCardForm>();

  if (isEmpty) {
    return (
      <EmptyCoursesState
        tenKhoaHoc={tenKhoaHoc}
        onClearFilter={handleClearSearch}
      />
    );
  }

  const coursesToRender = isSourceByCategory
    ? categoryPagination.state.paginatedList
    : processedCourses;

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {isLoading
        ? createArray(10).map((_, index) => <CoursesListSkeleton key={index} />)
        : coursesToRender?.map((course) => {
            return <CourseCard key={course.maKhoaHoc} course={course} />;
          })}
    </div>
  );
}
