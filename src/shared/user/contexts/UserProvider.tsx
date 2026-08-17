import type { ReactNode } from "react";

import { useAvatar } from "@shared/avatar";
import { useTheme } from "@shared/theme";

import { UserContext } from "./UserContext";
type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const { avatar, updateAvatar } = useAvatar();
  const { currentTheme, toggleTheme, isDarkMode, isLightMode, asset } =
    useTheme();

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
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
