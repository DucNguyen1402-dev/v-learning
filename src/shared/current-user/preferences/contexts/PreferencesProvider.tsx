import { type ReactNode, useCallback } from "react";

import { useAvatar } from "@shared/avatar";
import { useTheme } from "@shared/theme";

import { PreferencesContext } from "./PreferencesContext";
type UserProviderProps = {
  children: ReactNode;
};

export const PreferencesProvider = ({ children }: UserProviderProps) => {
  const avatar = useAvatar();
  const theme = useTheme();

  const refreshPreferences = useCallback(() => {
    avatar.refresh();
    theme.refresh();
  }, [avatar, theme]);
  const value = {
    avatar,
    theme,
    refreshPreferences,
  };
  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  );
};
