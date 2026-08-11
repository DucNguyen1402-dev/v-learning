import { type ThemeValue } from "@shared/theme/types";
export type ThemeContextValues = {
  theme: ThemeValue;
  toggleTheme: () => void;
  isDarkMode: boolean;
  isLightMode: boolean;
};
