import type { ReactNode } from "react";

import { CoursesContext } from "./CoursesContext";
import type { CoursesContextValues } from "./CoursesContextValues";
import { useCourses } from "./hooks";

interface CoursesProviderProps {
  children: ReactNode;
}

export const CoursesProvider = ({ children }: CoursesProviderProps) => {
  const { courses, isPending } = useCourses();

  const value: CoursesContextValues = {
    state: {
      isPending,
    },
    courses,
  };

  return (
    <CoursesContext.Provider value={value}>{children}</CoursesContext.Provider>
  );
};
