import { CurrentUserStorage } from "@shared/auth";

import type { ThemeValue } from "../types";
export const getCurrentUserTheme = (): ThemeValue =>
  CurrentUserStorage.getProperty("theme") ?? "light";
