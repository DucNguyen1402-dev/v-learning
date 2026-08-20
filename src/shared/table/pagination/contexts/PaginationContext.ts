import { createContext } from "react";

import type { PaginationContextValues } from "./PaginationContextValues";

export const PaginationContext = createContext<PaginationContextValues | null>(
  null,
);
