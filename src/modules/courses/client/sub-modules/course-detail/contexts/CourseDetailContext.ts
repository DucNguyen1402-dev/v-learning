import { createContext } from "react";

import type { UseCourseDetailReturn } from "./hooks";

export const CourseDetailContext = createContext<UseCourseDetailReturn | null>(
  null,
);
