import { createContext } from "react";

import type { PreferencesContextValues } from "./PreferencesContextValues";
export const PreferencesContext =
  createContext<PreferencesContextValues | null>(null);
