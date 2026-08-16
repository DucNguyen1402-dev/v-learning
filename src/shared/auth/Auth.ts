import {
  clearAuthSession,
  getCurrentUser,
  getCurrentUserTheme,
  updateCurrentUserTheme,
} from "./utils";

export const Auth = {
  logout: clearAuthSession,
  getCurrentUser,
  getCurrentUserTheme,
  updateCurrentUserTheme,
};
