import type { ReactNode } from "react";

import { Auth } from "@shared/auth";

import { LOGIN_FORM_FIELD_NAMES, useLoginActions, useLoginForm } from "./hooks";
import { LoginContext } from "./LoginContext";
import type { LoginContextValues } from "./types";

type LoginProviderProps = {
  children: ReactNode;
};
export const LoginProvider = ({ children }: LoginProviderProps) => {
  const { login, isLoggingIn } = Auth.login();

  const { register, errors, handleSubmit, control, getFieldState } =
    useLoginForm();

  const { onLoginClick } = useLoginActions({ handleSubmit, login });

  const value: LoginContextValues = {
    hookForm: { register, errors, control, getFieldState },
    actions: { onLoginClick },
    loading: isLoggingIn,
    LOGIN_FORM_FIELD_NAMES,
  };

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};
