import { useState } from "react";

import type { Theme } from "@shared/theme/types";

export const useThemeState = () => {
  const [currentTheme, setCurrentTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };
  return { currentTheme, toggleTheme };
};
