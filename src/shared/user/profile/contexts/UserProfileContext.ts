import { createContext } from "react";

import type { UserProfileReturnType } from "./hooks";

export const UserProfileContext = createContext<UserProfileReturnType | null>(
  null,
);
