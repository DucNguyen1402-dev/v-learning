import { useContext } from "react";

import { PersonalCoursesContext } from "./PersonalCoursesContext";

export const usePersonalCoursesContext = () => {
  const context = useContext(PersonalCoursesContext);
  if (!context) {
    throw new Error(
      "usePersonalCoursesContext must be used within a PersonalCoursesProvider",
    );
  }
  return context;
};
