import { createContext } from "react";

import type { CoursesContextValues } from "./CoursesContextValues";

export const CoursesContext = createContext<CoursesContextValues | null>(null);
