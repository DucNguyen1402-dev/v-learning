import { CurrentUserProvider, useCurrentUserContext } from "./contexts";

export const CurrentUser = {
  use: useCurrentUserContext,
  Provider: CurrentUserProvider,
};
