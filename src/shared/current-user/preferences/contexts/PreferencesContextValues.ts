import type { UseAvatarReturnType } from "@shared/avatar";
import type { UseThemeReturnType } from "@shared/theme";

export type PreferencesContextValues = {
  avatar: UseAvatarReturnType;
  theme: UseThemeReturnType;
  refreshPreferences: () => void;
};
