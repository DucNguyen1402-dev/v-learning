export const LOGO_SIZES = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  XLARGE: "xlarge",
} as const;

export const LOGO_VARIANTS = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
} as const;

export type LogoSize = (typeof LOGO_SIZES)[keyof typeof LOGO_SIZES];
export type LogoVariant = (typeof LOGO_VARIANTS)[keyof typeof LOGO_VARIANTS];
