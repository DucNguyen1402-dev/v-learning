import { createContext } from "react";

import type { UserCoursesHookResult } from "./hooks";

export const UserCoursesContext = createContext<
  UserCoursesHookResult | undefined
>(undefined);
