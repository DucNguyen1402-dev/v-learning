import { UserProfileProvider, useUserProfileContext } from "./contexts";

export const UserProfile = {
  Provider: UserProfileProvider,
  use: useUserProfileContext,
};
