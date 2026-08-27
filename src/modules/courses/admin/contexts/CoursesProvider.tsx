import type { ReactNode } from "react";

import { CoursesContext } from "./CoursesContext";
import { useCourses } from "./hooks";

interface CoursesProviderProps {
  children: ReactNode;
}

export const CoursesProvider = ({ children }: CoursesProviderProps) => {
  const value = useCourses();

  return (
    <CoursesContext.Provider value={value}>{children}</CoursesContext.Provider>
  );
};
