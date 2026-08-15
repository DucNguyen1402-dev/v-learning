import { type ReactNode, useEffect } from "react";

import { Auth } from "@shared/auth";
import { themeAssets } from "@shared/theme/constants";

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
    isDarkMode: currentTheme === "dark",
    isLightMode: currentTheme === "light",
    toggleTheme: toggleTheme,
    assets: themeAssets[currentTheme],
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
