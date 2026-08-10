import { useEffect, useState } from "react";

import type { ThemeValue } from "@shared/theme/types";

export const useThemeState = (theme: ThemeValue) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeValue>(theme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", currentTheme === "dark");
  }, [currentTheme]);

  const toggleTheme = () => {
    setCurrentTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { currentTheme, setCurrentTheme, toggleTheme };
};
