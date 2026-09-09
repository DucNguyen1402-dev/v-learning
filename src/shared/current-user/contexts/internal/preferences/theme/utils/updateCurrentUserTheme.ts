import { CurrentUserStorage } from "@shared/storage";
import type { ThemeValue } from "@shared/theme";

export const updateCurrentUserTheme = (theme: ThemeValue) => {
  CurrentUserStorage.update({
    theme,
  });
};
