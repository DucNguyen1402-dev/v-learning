import type { UseAvatarReturnType } from "@shared/avatar";
import type { useThemeReturnType } from "@shared/theme";
export type UserContextValues = {
  avatar: {
    current: UseAvatarReturnType["avatar"];
    update: UseAvatarReturnType["updateAvatar"];
  };
  theme: {
    current: useThemeReturnType["currentTheme"];
    toggle: useThemeReturnType["toggleTheme"];
    isDark: useThemeReturnType["isDarkMode"];
    isLight: useThemeReturnType["isLightMode"];
    asset: useThemeReturnType["asset"];
  };
};
