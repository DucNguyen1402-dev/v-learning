import type { ReactNode } from "react";

import { CoursesContext } from "./CoursesContext";
import type { CoursesContextValues } from "./CoursesContextValues";
import { useCourses, useCoursesParams, usePaginationEffect } from "./hooks";

interface CoursesProviderProps {
  children: ReactNode;
}

export const CoursesProvider = ({ children }: CoursesProviderProps) => {
  const { courses, isPending, pagination } = useCourses();
  const { filteredCourses, handleFilterChange, category, keyword } =
    useCoursesParams({
      courses,
    });

  usePaginationEffect({
    ...pagination.effectsProps,
    resetDeps: [keyword, category],
  });

  const value: CoursesContextValues = {
    state: {
      isPending,
    },
    courses,
    pagination,
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
