import { createContext } from "react";

import { type UsePersonalCoursesReturn } from "./hooks";

export const PersonalCoursesContext =
  createContext<UsePersonalCoursesReturn | null>(null);
