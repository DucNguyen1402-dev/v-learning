import type { UseAvatarReturnType } from "@shared/avatar";
import type { UseThemeReturnType } from "@shared/theme";
import type { UserProfileReturnType } from "@shared/user-profile";

export type UserContextValues = {
  avatar: {
    current: UseAvatarReturnType["avatar"];
    update: UseAvatarReturnType["updateAvatar"];
  };
  theme: {
    current: UseThemeReturnType["currentTheme"];
    toggle: UseThemeReturnType["toggleTheme"];
    isDark: UseThemeReturnType["isDarkMode"];
    isLight: UseThemeReturnType["isLightMode"];
    asset: UseThemeReturnType["asset"];
  };
  profile: {
    current: UserProfileReturnType["profile"];
    refresh: UserProfileReturnType["refreshProfile"];
  };
};
