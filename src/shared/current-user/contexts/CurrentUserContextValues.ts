import type {
  ProfileReturnType,
  UseAvatarReturnType,
  UseEnrolledCourseResult,
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
  enrolledCourse: UseEnrolledCourseResult;
  refreshCurrentUser: () => void;
};
