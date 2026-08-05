import type { ReactNode } from "react";

import { useLoginActions, useLoginForm } from "./hooks";
import { LoginContext } from "./LoginContext";
import type { LoginContextValue } from "./LoginContextValue";

type LoginProviderProps = {
  children: ReactNode;
};
const LoginProvider = ({ children }: LoginProviderProps) => {
  const { register, errors, isDirty, handleSubmit, control } = useLoginForm();

  const { onLoginClick } = useLoginActions({ handleSubmit });

  const value: LoginContextValue = {
    hookForm: { register, errors, isDirty, control },
    actions: { onLoginClick },
  };

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};

export default LoginProvider;
