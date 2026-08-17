import { type ReactNode, useEffect } from "react";

import { CurrentUser } from "@shared/current-user";
import { themeAssets } from "@shared/theme/constants";

import { useThemeState } from "./hooks";
import { ThemeContext } from "./ThemeContext";
import type { ThemeContextValues } from "./ThemeContextValues";

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { currentTheme, toggleTheme } = useThemeState(
    CurrentUser.theme.get() ?? "light",
  );

  useEffect(() => {
    CurrentUser.theme.update(currentTheme);
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
