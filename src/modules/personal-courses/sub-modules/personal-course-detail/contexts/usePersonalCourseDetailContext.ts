import { useContext } from "react";

import { PersonalCourseDetailContext } from "./PersonalCourseDetailContext";

export const usePersonalCourseDetailContext = () => {
  const context = useContext(PersonalCourseDetailContext);
  if (!context) {
    throw new Error(
      "usePersonalCourseDetailContext must be used within a PersonalCourseDetailProvider",
    );
  }
  return context;
};
