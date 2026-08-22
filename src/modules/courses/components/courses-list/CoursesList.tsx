import { useCoursesContext } from "@modules/courses/contexts";
import { createArray } from "@shared/utils";

import { CourseCard } from "./CourseCard";
import { CoursesListSkeleton } from "./CoursesListSkeleton";
import { EmptyCoursesState } from "./EmptyCoursesState";

export function CoursesList() {
  const {
    pagination: {
      status: { isLoading, isEmpty },
    },
    filter: { tenKhoaHoc, handleClearSearch },
    courses,
  } = useCoursesContext();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {createArray(10).map((_, index) => (
          <CoursesListSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (isEmpty) {
    return (
      <EmptyCoursesState
        tenKhoaHoc={tenKhoaHoc}
        onClearFilter={handleClearSearch}
      />
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {courses?.map((course) => {
        return <CourseCard key={course.maKhoaHoc} course={course} />;
      })}
    </div>
  );
}
