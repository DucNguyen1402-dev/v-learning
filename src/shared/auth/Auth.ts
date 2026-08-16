import { useLoginMutation, useRegisterMutation } from "./hooks";
import {
  clearAuthSession,
  getCurrentUser,
  getCurrentUserTheme,
  updateCurrentUserTheme,
} from "./utils";

export const Auth = {
  login: useLoginMutation,
  register: useRegisterMutation,
  logout: clearAuthSession,
  getCurrentUser,
  getCurrentUserTheme,
  updateCurrentUserTheme,
};
