import { Pagination } from "@shared/table";
import { createArray } from "@shared/utils";

import { CourseCard } from "./CourseCard";
import { CoursesListSkeleton } from "./CoursesListSkeleton";

// import { EmptyCoursesState } from "./EmptyCoursesState";
import type { CourseCardForm } from "@/modules/courses/shared/types";

type CoursesListProps = {
  isLoading: boolean;
  isEmpty: boolean;
};
export function CoursesList({
  isLoading,
  // isEmpty,
}: CoursesListProps) {
  const categoryPagination = Pagination.use<CourseCardForm>();

  // if (isEmpty) {
  //   return (
  //     <EmptyCoursesState
  //       tenKhoaHoc={tenKhoaHoc}
  //       onClearFilter={handleClearSearch}
  //     />
  //   );
  // }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {isLoading
        ? createArray(10).map((_, index) => <CoursesListSkeleton key={index} />)
        : categoryPagination.state.paginatedList?.map((course) => {
            return <CourseCard key={course.maKhoaHoc} course={course} />;
          })}
    </div>
  );
}
