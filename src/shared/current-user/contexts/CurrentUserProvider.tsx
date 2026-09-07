import { CurrentUserStorage } from "@shared/storage";

import { CurrentUserContext } from "./CurrentUserContext";
import {
  isAdmin,
  useAvatar,
  useEnrolledCourse,
  useProfile,
  useTheme,
} from "./internal";

type CurrentUserProviderProps = {
  children: React.ReactNode;
};
export const CurrentUserProvider = ({ children }: CurrentUserProviderProps) => {
  const profile = useProfile();
  const avatar = useAvatar();
  const theme = useTheme();
  const enrolledCourse = useEnrolledCourse();

  const hasCurrentUser = CurrentUserStorage.hasStored();

  const refreshPreferences = () => {
    avatar.refresh();
    theme.refresh();
  };
  return (
    <CurrentUserContext.Provider
      value={{
        isAdmin: isAdmin(),
        hasCurrentUser,
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
