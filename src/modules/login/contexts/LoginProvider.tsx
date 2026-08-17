import type { ReactNode } from "react";

import { useLogin, type UseLoginReturn } from "./hooks";
import { LoginContext } from "./LoginContext";

type LoginProviderProps = {
  children: ReactNode;
};
export const LoginProvider = ({ children }: LoginProviderProps) => {
  const value: UseLoginReturn = useLogin();

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};
