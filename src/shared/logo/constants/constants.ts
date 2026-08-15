export const LOGO_SIZES = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
} as const;

export type LogoSize = (typeof LOGO_SIZES)[keyof typeof LOGO_SIZES];
