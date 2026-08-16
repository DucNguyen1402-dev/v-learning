import type { ReactNode } from "react";

import { useRegister, type UseRegisterReturnValues } from "./hooks";
import { RegisterContext } from "./RegisterContext";

type RegisterProviderProps = {
  children: ReactNode;
};

export const RegisterProvider = ({ children }: RegisterProviderProps) => {
  const value: UseRegisterReturnValues = useRegister();

  return (
    <RegisterContext.Provider value={value}>
      {children}
    </RegisterContext.Provider>
  );
};
