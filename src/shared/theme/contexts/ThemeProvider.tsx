import type { ReactNode } from "react";

import { useThemeState } from "./hooks";
import { ThemeContext } from "./ThemeContext";
import type { ThemeContextValues } from "./ThemeContextValues";

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { currentTheme, toggleTheme } = useThemeState();

  const value: ThemeContextValues = {
    theme: currentTheme,
    toggleTheme: toggleTheme,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
