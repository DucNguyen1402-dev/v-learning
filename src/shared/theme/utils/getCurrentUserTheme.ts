import { CurrentUserStorage } from "@shared/auth/currentUserStorage";

import type { ThemeValue } from "../types";
export const getCurrentUserTheme = (): ThemeValue =>
  CurrentUserStorage.getProperty("theme") ?? "light";
