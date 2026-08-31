import { createContext } from "react";

import type { CourseEnrollmentHookResult } from "./hooks";

export const CourseEnrollmentContext = createContext<
  CourseEnrollmentHookResult | undefined
>(undefined);
