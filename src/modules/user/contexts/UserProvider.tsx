import type { ReactNode } from "react";

import { useUser } from "./hooks";
import { UserContext } from "./UserContext";

type UserProviderProps = {
  children: ReactNode;
};
export const UserProvider = ({ children }: UserProviderProps) => {
  const value = useUser();

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
