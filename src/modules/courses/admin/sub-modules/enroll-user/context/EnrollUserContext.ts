import { createContext } from "react";

import type { UseEnrollUserReturn } from "./hooks";

export const EnrollUserContext = createContext<UseEnrollUserReturn | undefined>(
  undefined,
);
