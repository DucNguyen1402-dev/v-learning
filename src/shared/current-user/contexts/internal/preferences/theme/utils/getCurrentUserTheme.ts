import { CurrentUserStorage } from "@shared/storage";
import type { ThemeValue } from "@shared/theme";
export const getCurrentUserTheme = (): ThemeValue =>
  CurrentUserStorage.getProperty("theme") ?? "light";
