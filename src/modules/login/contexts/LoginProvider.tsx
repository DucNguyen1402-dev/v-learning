import type { ReactNode } from "react";

import { useLoginMutation } from "@shared/auth";

import { useLoginActions, useLoginForm } from "./hooks";
import { LoginContext } from "./LoginContext";
import type { LoginContextValues } from "./LoginContextValues";

type LoginProviderProps = {
  children: ReactNode;
};
export const LoginProvider = ({ children }: LoginProviderProps) => {
  const { login, isPending } = useLoginMutation();

  const { register, errors, handleSubmit, control } = useLoginForm();

  const { onLoginClick } = useLoginActions({ handleSubmit, login });

  const value: LoginContextValues = {
    hookForm: { register, errors, control },
    actions: { onLoginClick },
    loading: isPending,
  };

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};
