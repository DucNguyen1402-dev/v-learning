import type { ReactNode } from "react";

import { RequireCurrentUser } from "./RequireCurrentUser";

import { UserProfile } from "@/shared/user";

type ProfileProviderProp = {
  children: ReactNode;
};
export const ProfileProvider = ({ children }: ProfileProviderProp) => (
  <RequireCurrentUser>
    <UserProfile.Provider>{children}</UserProfile.Provider>
  </RequireCurrentUser>
);
