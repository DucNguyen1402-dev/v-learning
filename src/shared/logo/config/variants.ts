import type { LogoVariant } from "../constants";

export const logoVariants = {
  primary: "login-logo-variant--primary",
  secondary: "login-logo-variant--secondary",
} as const satisfies Record<LogoVariant, string>;
