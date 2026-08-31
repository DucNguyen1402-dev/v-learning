import { useContext } from "react";

import { CourseEnrollmentContext } from "./CourseEnrollmentContext";

export const useCourseEnrollmentContext = () => {
  const context = useContext(CourseEnrollmentContext);
  if (!context) {
    throw new Error(
      "useCourseEnrollmentContext must be used within a CourseEnrollmentProvider",
    );
  }
  return context;
};
