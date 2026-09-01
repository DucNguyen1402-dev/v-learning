import type { ReactNode } from "react";

import { UserProfile } from "@shared/user-profile";

import { RequireCurrentUser } from "./RequireCurrentUser";

type ProfileProviderProp = {
  children: ReactNode;
};
export const ProfileProvider = ({ children }: ProfileProviderProp) => (
  <RequireCurrentUser>
    <UserProfile.Provider>{children}</UserProfile.Provider>
  </RequireCurrentUser>
);
