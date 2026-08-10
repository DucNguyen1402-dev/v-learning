import { STORAGE_KEYS } from "@shared/auth/constants";
import type { CurrentUser } from "@shared/auth/types";
import {
  findCurrentUserStorage,
  getCurrentUser,
  getCurrentUserProperty,
} from "@shared/auth/utils";
import type { ThemeValue } from "@shared/theme/types";

export const getCurrentUserTheme = () => getCurrentUserProperty("theme");

export const updateCurrentUserTheme = (theme: ThemeValue) => {
  const user: CurrentUser = getCurrentUser();

  const storage: Storage | null = findCurrentUserStorage();

  storage?.setItem(STORAGE_KEYS.USER, JSON.stringify({ ...user, theme }));
};
