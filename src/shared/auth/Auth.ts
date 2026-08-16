import { useLoginMutation } from "./hooks";
import {
  clearAuthSession,
  getCurrentUser,
  getCurrentUserTheme,
  updateCurrentUserTheme,
} from "./utils";

export const Auth = {
  login: useLoginMutation,
  logout: clearAuthSession,
  getCurrentUser,
  getCurrentUserTheme,
  updateCurrentUserTheme,
};
