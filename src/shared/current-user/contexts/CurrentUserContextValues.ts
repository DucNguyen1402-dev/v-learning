import type {
  ProfileReturnType,
  UseAvatarReturnType,
  UseEnrolledCourseResult,
  UseThemeReturnType,
} from "./internal";

export type CurrentUserContextValues = {
  isAdmin: boolean;
  hasCurrentUser: boolean;
  preferences: {
    avatar: UseAvatarReturnType;
    theme: UseThemeReturnType;
    refreshPreferences: () => void;
  };
  profile: ProfileReturnType;
  enrolledCourse: UseEnrolledCourseResult;
};
