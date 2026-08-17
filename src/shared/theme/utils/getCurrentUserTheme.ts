import { CurrentUserStorage } from "@shared/auth/currentUserStorage";

export const getCurrentUserTheme = () =>
  CurrentUserStorage.getProperty("theme");
