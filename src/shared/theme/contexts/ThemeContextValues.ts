import { type Theme } from "@shared/theme/types";
export type ThemeContextValues = {
  theme: Theme;
  toggleTheme: () => void;
};
