import {
  getCurrentUserProfile,
  getCurrentUserTheme,
  updateCurrentUserTheme,
} from "./util";

export const CurrentUser = {
  profile: {
    get: getCurrentUserProfile,
  },
  theme: {
    get: getCurrentUserTheme,
    update: updateCurrentUserTheme,
  },
};
