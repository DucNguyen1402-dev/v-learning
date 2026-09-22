import type { LogoSize } from "../constants";

type LogoSizeConfig = {
  wrapper: string;
  icon: string;
};
export const logoSizes = {
  small: {
    wrapper: "size-8",
    icon: "size-6",
  },
  medium: {
    wrapper: "size-10",
    icon: "size-8",
  },
  large: {
    wrapper: "size-14",
    icon: "size-10",
  },
  xlarge: {
    wrapper: "size-20",
    icon: "size-14",
  },
} as const satisfies Record<LogoSize, LogoSizeConfig>;
