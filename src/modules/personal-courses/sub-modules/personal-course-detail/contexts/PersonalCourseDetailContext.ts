import { createContext } from "react";

import type { UsePersonalCourseDetailReturn } from "./hooks";

export const PersonalCourseDetailContext =
  createContext<UsePersonalCourseDetailReturn | null>(null);
