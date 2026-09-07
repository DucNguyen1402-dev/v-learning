import type {
  ProfileReturnType,
  UseAvatarReturnType,
  UseThemeReturnType,
} from "./internal";

export type CurrentUserContextValues = {
  hasCurrentUser: boolean;
  preferences: {
    avatar: UseAvatarReturnType;
    theme: UseThemeReturnType;
    refreshPreferences: () => void;
  };
  profile: ProfileReturnType;
};
