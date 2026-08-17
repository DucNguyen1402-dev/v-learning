import { CurrentUserStorage } from "@shared/auth/currentUserStorage";
import type { ThemeValue } from "@shared/theme";

export const updateCurrentUserTheme = (theme: ThemeValue) => {
  CurrentUserStorage.update({
    theme,
  });
};
