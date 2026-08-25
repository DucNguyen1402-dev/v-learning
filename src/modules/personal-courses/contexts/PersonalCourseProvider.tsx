import type { ReactNode } from "react";

import { usePersonalCourses } from "./hooks";
import { PersonalCoursesContext } from "./PersonalCoursesContext";

type PersonalCoursesProviderProps = {
  children: ReactNode;
};

export const PersonalCoursesProvider = ({
  children,
}: PersonalCoursesProviderProps) => {
  const personalCourses = usePersonalCourses();

  return (
    <PersonalCoursesContext.Provider value={personalCourses}>
      {children}
    </PersonalCoursesContext.Provider>
  );
};
