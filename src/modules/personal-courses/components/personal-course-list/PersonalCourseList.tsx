import type { PersonalCourse } from "@modules/personal-courses/types";

import { CourseCard } from "./CourseCard";
type PersonalCourseListProps = {
  courses: PersonalCourse[];
};
export const PersonalCourseList = ({ courses }: PersonalCourseListProps) => {
  return (
    <div className="min-h-screen p-2 md:p-4 lg:p-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.maKhoaHoc} course={course} />
        ))}
      </div>
    </div>
  );
};
