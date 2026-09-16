import type { EnrichedPersonalCourse } from "@modules/personal-courses/mocks";

import { CourseCard } from "./CourseCard";
type PersonalCourseListProps = {
  courses: EnrichedPersonalCourse[];
};
export const PersonalCourseList = ({ courses }: PersonalCourseListProps) => {
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.maKhoaHoc} course={course} />
        ))}
      </div>
    </div>
  );
};
