import { createContext } from "react";

import type { RouteMetaDataContextType } from "./hooks";

export const RouteMetaDataContext =
  createContext<RouteMetaDataContextType | null>(null);
