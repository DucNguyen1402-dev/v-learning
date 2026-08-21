import { createContext } from "react";

import type { PaginationResult } from "./hooks";

export const PaginationContext =
  createContext<PaginationResult<unknown> | null>(null);
