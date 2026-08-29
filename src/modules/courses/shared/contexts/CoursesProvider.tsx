import type { ReactNode } from "react";

import { CoursesContext } from "./CoursesContext";
import { useCourses } from "./hooks";

interface CoursesProviderProps {
  children: ReactNode;
  shouldEnrichData?: boolean;
}

export const CoursesProvider = ({
  children,
  shouldEnrichData,
}: CoursesProviderProps) => {
  const value = useCourses({ shouldEnrichData });

  return (
    <CoursesContext.Provider value={value}>{children}</CoursesContext.Provider>
  );
};
