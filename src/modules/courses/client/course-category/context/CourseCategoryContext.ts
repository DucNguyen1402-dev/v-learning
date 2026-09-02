import { createContext } from "react";

import { type useCourseCategoryReturn } from "./hooks";

export const CourseCategoryContext =
  createContext<useCourseCategoryReturn | null>(null);
