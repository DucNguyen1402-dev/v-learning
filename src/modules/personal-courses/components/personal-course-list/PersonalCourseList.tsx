import type { EnrichedPersonalCourse } from "@modules/personal-courses/mocks";
import { Pagination } from "@shared/table";

import { CourseCard } from "./CourseCard";
import { PersonalCourseListFooter } from "./PersonalCourseListFooter";
type PersonalCourseListProps = {
  affectedCourseId?: string;
};
export const PersonalCourseList = ({
  affectedCourseId,
}: PersonalCourseListProps) => {
  const pagination = Pagination.use<EnrichedPersonalCourse>();

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pagination.state.paginatedList.map((course) => (
          <CourseCard
            key={course.maKhoaHoc}
            course={course}
            isAffected={affectedCourseId === course.maKhoaHoc}
          />
        ))}
      </div>
      <div className="mt-10">
        <PersonalCourseListFooter />
      </div>
    </div>
  );
};
