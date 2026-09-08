import { CurrentUserProvider, useCurrentUserContext } from "./contexts";
import { hasStoredCurrentUser, isAdmin } from "./utils";
export const CurrentUser = {
  use: useCurrentUserContext,
  Provider: CurrentUserProvider,
  utils: {
    isAdmin,
    hasStored: hasStoredCurrentUser,
  },
};
