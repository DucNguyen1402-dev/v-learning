import type { ReactNode } from "react";

import { UserProfile } from "@/shared/current-user";

type ProfileProviderProp = {
  children: ReactNode;
};
export const ProfileProvider = ({ children }: ProfileProviderProp) => (
  <UserProfile.Provider>{children}</UserProfile.Provider>
);
