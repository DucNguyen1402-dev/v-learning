import { createContext } from "react";

import type { CurrentUserContextValues } from "./CurrentUserContextValues";

export const CurrentUserContext =
  createContext<CurrentUserContextValues | null>(null);
