import { type ReactNode, useEffect } from "react";

import { Auth } from "@shared/auth";

import { useThemeState } from "./hooks";
import { ThemeContext } from "./ThemeContext";
import type { ThemeContextValues } from "./ThemeContextValues";

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { currentTheme, toggleTheme } = useThemeState(
    Auth.getCurrentUserTheme() ?? "light",
  );

  useEffect(() => {
    Auth.updateCurrentUserTheme(currentTheme);
  }, [currentTheme]);

  const value: ThemeContextValues = {
    theme: currentTheme,
    toggleTheme: toggleTheme,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
