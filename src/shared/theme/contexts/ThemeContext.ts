import { createContext } from "react";

import type { ThemeContextValues } from "./ThemeContextValues";

export const ThemeContext = createContext<ThemeContextValues | null>(null);
