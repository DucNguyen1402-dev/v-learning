import { type ReactNode, useCallback } from "react";

import { useAvatar } from "@shared/avatar";
import { useTheme } from "@shared/theme";

import { UserContext } from "./UserContext";
type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const { avatar, updateAvatar, refreshAvatar } = useAvatar();
  const {
    currentTheme,
    toggleTheme,
    isDarkMode,
    isLightMode,
    asset,
    refreshTheme,
  } = useTheme();

  const refreshUser = useCallback(() => {
    refreshAvatar();
    refreshTheme();
  }, [refreshAvatar, refreshTheme]);
  const value = {
    avatar: {
      current: avatar,
      update: updateAvatar,
    },

    theme: {
      current: currentTheme,
      toggle: toggleTheme,
      isDark: isDarkMode,
      isLight: isLightMode,
      asset,
    },
    refresh: refreshUser,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
