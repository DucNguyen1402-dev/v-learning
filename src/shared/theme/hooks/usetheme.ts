import { useEffect, useState } from "react";

import { themeAssets } from "../config";
import type { ThemeValue } from "../types";
import { getCurrentUserTheme, updateCurrentUserTheme } from "../utils";

export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState<ThemeValue>(
    getCurrentUserTheme(),
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", currentTheme === "dark");
  }, [currentTheme]);

  const toggleTheme = () => {
    setCurrentTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      updateCurrentUserTheme(newTheme);
      return newTheme;
    });
  };

  return {
    currentTheme,
    toggleTheme,
    isDarkMode: currentTheme === "dark",
    isLightMode: currentTheme === "light",
    asset: themeAssets[currentTheme],
  };
};

export type UseThemeReturnType = ReturnType<typeof useTheme>;
