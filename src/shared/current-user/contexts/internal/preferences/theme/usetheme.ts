import { useCallback, useEffect, useState } from "react";

import { themeAssets, type ThemeValue } from "@shared/theme";

import { getCurrentUserTheme, updateCurrentUserTheme } from "./utils";

export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState<ThemeValue>(
    getCurrentUserTheme(),
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", currentTheme === "dark");
  }, [currentTheme]);

  const toggle = () => {
    setCurrentTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      updateCurrentUserTheme(newTheme);
      return newTheme;
    });
  };

  const refresh = useCallback(() => {
    const userTheme = getCurrentUserTheme();
    setCurrentTheme(userTheme);
  }, []);

  return {
    currentTheme,
    toggle,
    isDarkMode: currentTheme === "dark",
    isLightMode: currentTheme === "light",
    asset: themeAssets[currentTheme],
    refresh,
  };
};

export type UseThemeReturnType = ReturnType<typeof useTheme>;
