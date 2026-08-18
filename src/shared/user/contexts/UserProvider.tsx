import { type ReactNode, useEffect, useState } from "react";

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

  const [refreshed, setRefreshed] = useState(false);
  const refreshUser = () => {
    setRefreshed(true);
  };

  useEffect(() => {
    refreshAvatar();
    refreshTheme();
  }, [refreshed, refreshAvatar, refreshTheme]);

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
