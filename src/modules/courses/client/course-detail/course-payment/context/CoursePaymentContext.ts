import { createContext } from "react";

import type { UseCoursePaymentReturn } from "./hooks";

export const CoursePaymentContext =
  createContext<UseCoursePaymentReturn | null>(null);
