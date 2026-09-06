import { CurrentUserStorage } from "@shared/auth";

import type { ThemeValue } from "../types";

export const updateCurrentUserTheme = (theme: ThemeValue) => {
  CurrentUserStorage.update({
    theme,
  });
};
