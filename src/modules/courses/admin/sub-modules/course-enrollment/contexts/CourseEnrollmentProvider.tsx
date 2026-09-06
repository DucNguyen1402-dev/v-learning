import type { ReactNode } from "react";

import { CourseEnrollmentContext } from "./CourseEnrollmentContext";
import { useCourseEnrollment } from "./hooks";

interface CourseEnrollmentProviderProps {
  children: ReactNode;
  maKhoaHoc: string;
}

export const CourseEnrollmentProvider = ({
  children,
  maKhoaHoc,
}: CourseEnrollmentProviderProps) => {
  const userCourses = useCourseEnrollment(maKhoaHoc);
  return (
    <CourseEnrollmentContext.Provider value={userCourses}>
      {children}
    </CourseEnrollmentContext.Provider>
  );
};
