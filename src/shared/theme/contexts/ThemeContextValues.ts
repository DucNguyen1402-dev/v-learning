import { type ThemeAsset, type ThemeValue } from "@shared/theme";

export type ThemeContextValues = {
  theme: ThemeValue;
  toggleTheme: () => void;
  isDarkMode: boolean;
  isLightMode: boolean;
  assets: ThemeAsset;
};
