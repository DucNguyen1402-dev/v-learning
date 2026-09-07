import { CurrentUserStorage } from "@shared/storage";

import type { ThemeValue } from "../types";

export const updateCurrentUserTheme = (theme: ThemeValue) => {
  CurrentUserStorage.update({
    theme,
  });
};
