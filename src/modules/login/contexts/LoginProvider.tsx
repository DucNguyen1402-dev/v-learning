import type { ReactNode } from "react";

import { Auth } from "@shared/auth";

import { useLoginActions, useLoginForm } from "./hooks";
import { LoginContext } from "./LoginContext";
import type { LoginContextValues } from "./LoginContextValues";

type LoginProviderProps = {
  children: ReactNode;
};
export const LoginProvider = ({ children }: LoginProviderProps) => {
  const { login, isLoggingIn } = Auth.login();

  const { register, errors, handleSubmit, control } = useLoginForm();

  const { onLoginClick } = useLoginActions({ handleSubmit, login });

  const value: LoginContextValues = {
    hookForm: { register, errors, control },
    actions: { onLoginClick },
    loading: isLoggingIn,
  };

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};
