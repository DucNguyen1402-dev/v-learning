import type { ReactNode } from "react";

import { useAuthTheme, useThemeState } from "./hooks";
import { ThemeContext } from "./ThemeContext";
import type { ThemeContextValues } from "./ThemeContextValues";

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { currentTheme, toggleTheme } = useThemeState();
  const { theme } = useAuthTheme({ currentTheme });

  const value: ThemeContextValues = {
    theme: theme,
    toggleTheme: toggleTheme,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
