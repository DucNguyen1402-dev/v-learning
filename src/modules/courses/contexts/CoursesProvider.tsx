import type { ReactNode } from "react";

import { CoursesContext } from "./CoursesContext";
import type { CoursesContextValues } from "./CoursesContextValues";
import { useCourses, useCoursesParams } from "./hooks";

interface CoursesProviderProps {
  children: ReactNode;
}

export const CoursesProvider = ({ children }: CoursesProviderProps) => {
  const { courses, isPending, isSuccess } = useCourses();
  const { filteredCourses, handleFilterChange, category, keyword } =
    useCoursesParams({
      courses,
    });

  const value: CoursesContextValues = {
    state: {
      isPending,
      isSuccess,
    },
    courses,
    filter: {
      category,
      keyword,
      handleFilterChange,
      filteredCourses,
    },
  };

  return (
    <CoursesContext.Provider value={value}>{children}</CoursesContext.Provider>
  );
};
