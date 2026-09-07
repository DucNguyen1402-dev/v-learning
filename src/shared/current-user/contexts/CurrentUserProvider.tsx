import { CurrentUserStorage } from "@shared/storage";

import { CurrentUserContext } from "./CurrentUserContext";
import { useAvatar, useProfile, useTheme } from "./internal";

type CurrentUserProviderProps = {
  children: React.ReactNode;
};
export const CurrentUserProvider = ({ children }: CurrentUserProviderProps) => {
  const profile = useProfile();
  const avatar = useAvatar();
  const theme = useTheme();

  const hasCurrentUser = CurrentUserStorage.hasStored();

  const refreshPreferences = () => {
    avatar.refresh();
    theme.refresh();
  };
  return (
    <CurrentUserContext.Provider
      value={{
        hasCurrentUser,
        profile,
        preferences: {
          avatar,
          theme,
          refreshPreferences,
        },
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
