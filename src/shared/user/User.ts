import { UserProvider, useUserContext } from "./contexts";

export const User = {
  Provider: UserProvider,
  use: useUserContext,
};
