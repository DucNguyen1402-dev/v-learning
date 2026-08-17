import { CurrentUserStorage } from "@shared/auth/currentUserStorage";

import type { ThemeValue } from "../types";

export const updateCurrentUserTheme = (theme: ThemeValue) => {
  CurrentUserStorage.update({
    theme,
  });
};
