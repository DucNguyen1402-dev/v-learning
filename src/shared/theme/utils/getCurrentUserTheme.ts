import { CurrentUserStorage } from "@shared/storage";

import type { ThemeValue } from "../types";
export const getCurrentUserTheme = (): ThemeValue =>
  CurrentUserStorage.getProperty("theme") ?? "light";
