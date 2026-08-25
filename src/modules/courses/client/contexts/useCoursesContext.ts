import { useContext } from "react";

import { CoursesContext } from "./CoursesContext";

export function useCoursesContext() {
  const context = useContext(CoursesContext);
  if (!context) {
    throw new Error(
      "useCoursesContext must be used within a <CoursesProvider>",
    );
  }
  return context;
}
