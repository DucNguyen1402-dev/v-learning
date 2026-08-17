import { type ReactNode, useMemo } from "react";

import { usePasswordVisibility } from "./hooks/usePasswordVisibility";
import { InputContext } from "./InputContext";
import type { InputContextValues } from "./InputContextValues";

type InputProviderProps = {
  children: ReactNode;
};

export const InputProvider = ({ children }: InputProviderProps) => {
  const { showPassword, togglePasswordVisibility } = usePasswordVisibility();

  const value: InputContextValues = useMemo(
    () => ({
      password: {
        showPassword,
        togglePasswordVisibility,
      },
    }),
    [showPassword, togglePasswordVisibility],
  );
  return (
    <InputContext.Provider value={value}>{children}</InputContext.Provider>
  );
};
