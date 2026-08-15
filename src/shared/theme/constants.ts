import { MoonStar, Sun } from "lucide-react";

import { darkLogo, lightLogo } from "@assets/logo/client";

export const themeAssets = {
  dark: {
    logo: darkLogo,
    icon: Sun,
    label: "sáng",
  },
  light: {
    logo: lightLogo,
    icon: MoonStar,
    label: "tối",
  },
} as const;

export type ThemeAsset = (typeof themeAssets)[keyof typeof themeAssets];
