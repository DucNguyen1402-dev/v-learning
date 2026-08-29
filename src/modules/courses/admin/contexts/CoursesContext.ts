import { createContext } from "react";

import type { UseCoursesReturn } from "./hooks";

export const CoursesContext = createContext<UseCoursesReturn | null>(null);
