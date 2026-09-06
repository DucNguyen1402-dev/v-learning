import { useContext } from "react";

import { CoursePaymentContext } from "./CoursePaymentContext";

export const useCoursePaymentContext = () => {
  const context = useContext(CoursePaymentContext);
  if (!context) {
    throw new Error(
      "useCoursePaymentContext must be used within a CoursePaymentProvider",
    );
  }
  return context;
};
