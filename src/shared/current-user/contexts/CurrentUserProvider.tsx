import { CurrentUserStorage } from "@shared/storage";

import { CurrentUserContext } from "./CurrentUserContext";
import { useAvatar, useEnrolledCourse, useProfile, useTheme } from "./internal";

type CurrentUserProviderProps = {
  children: React.ReactNode;
};
export const CurrentUserProvider = ({ children }: CurrentUserProviderProps) => {
  const profile = useProfile();
  const avatar = useAvatar();
  const theme = useTheme();
  const enrolledCourse = useEnrolledCourse();

  const hasCurrentUser = !!CurrentUserStorage.tryGet();

  const refreshPreferences = () => {
    avatar.refresh();
    theme.refresh();
  };

  const refreshCurrentUser = () => {
    profile.refresh();
    refreshPreferences();
  };
  return (
    <CurrentUserContext.Provider
      value={{
        hasCurrentUser,
        refreshCurrentUser,
        profile,
        preferences: {
          avatar,
          theme,
          refreshPreferences,
        },
        enrolledCourse,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
