import { useContext } from "react";

import { CourseCategoryContext } from "./CourseCategoryContext";

export const useCourseCategoryContext = () => {
  const context = useContext(CourseCategoryContext);
  if (!context) {
    throw new Error(
      "useCourseCategoryContext must be used within a CourseCategoryProvider",
    );
  }
  return context;
};
