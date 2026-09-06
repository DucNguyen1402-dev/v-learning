import type { ReactNode } from "react";

import { useUserProfile } from "./hooks";
import { UserProfileContext } from "./UserProfileContext";

type UserProfileProviderProps = {
  children: ReactNode;
};

export const UserProfileProvider = ({ children }: UserProfileProviderProps) => {
  const value = useUserProfile();

  return (
    <UserProfileContext.Provider value={value}>
      {children}
    </UserProfileContext.Provider>
  );
};
