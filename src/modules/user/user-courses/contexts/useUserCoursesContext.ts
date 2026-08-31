import { useContext } from "react";

import { UserCoursesContext } from "./UserCoursesContext";

export const useUserCoursesContext = () => {
  const context = useContext(UserCoursesContext);
  if (!context) {
    throw new Error(
      "useUserCoursesContext must be used within a UserCoursesProvider",
    );
  }
  return context;
};
