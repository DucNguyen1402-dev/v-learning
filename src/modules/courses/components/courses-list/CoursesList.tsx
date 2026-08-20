import { useCoursesContext } from "@modules/courses/contexts";
import { createArray } from "@shared/utils";

import { CourseCard } from "./CourseCard";
import { CoursesListSkeleton } from "./CoursesListSkeleton";

export function CoursesList() {
  const {
    state: { isPending },
    filter: { filteredCourses },
  } = useCoursesContext();

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {isPending
        ? createArray(10).map((_, index) => <CoursesListSkeleton key={index} />)
        : filteredCourses?.map((course) => {
            return <CourseCard key={course.maKhoaHoc} course={course} />;
          })}
    </div>
  );
}
