import { useCallback, useEffect, useState } from "react";

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

  const refreshTheme = useCallback(() => {
    const userTheme = getCurrentUserTheme();
    setCurrentTheme(userTheme);
  }, []);

  return {
    currentTheme,
    toggleTheme,
    isDarkMode: currentTheme === "dark",
    isLightMode: currentTheme === "light",
    asset: themeAssets[currentTheme],
    refreshTheme,
  };
};

export type UseThemeReturnType = ReturnType<typeof useTheme>;
