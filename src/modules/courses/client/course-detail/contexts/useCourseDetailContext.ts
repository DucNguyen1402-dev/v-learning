import { useContext } from "react";

import { CourseDetailContext } from "./CourseDetailContext";

export const useCourseDetailContext = () => {
  const context = useContext(CourseDetailContext);
  if (!context) {
    throw new Error(
      "useCourseDetailContext must be used within a <CourseDetailProvider>",
    );
  }
  return context;
};
