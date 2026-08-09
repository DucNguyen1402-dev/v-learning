import { useEffect } from "react";

import { getCurrentUser, saveCurrentUser } from "@shared/auth";
import type { Theme } from "@shared/theme/types";

type UseAuthThemeProps = {
  currentTheme: Theme;
};
export const useAuthTheme = ({ currentTheme }: UseAuthThemeProps) => {
  const { currentUser } = getCurrentUser();

  useEffect(() => {
    if (!currentUser) return;
    saveCurrentUser({ ...currentUser, theme: currentTheme });
  }, [currentTheme, currentUser]);

  return {
    theme: currentUser?.theme ?? currentTheme,
  };
};
