import type { SkeletonHeight, SkeletonWidth } from "../constants";

export const skeletonWidths = {
  xs: "4rem",
  sm: "6rem",
  md: "8rem",
  lg: "12rem",
  xl: "16rem",
  "2xl": "20rem",
} as const satisfies Record<SkeletonWidth, string>;

export const skeletonHeights = {
  xs: "0.75rem",
  sm: "1rem",
  md: "1.5rem",
  lg: "2rem",
  xl: "2.5rem",
  "2xl": "3rem",
} as const satisfies Record<SkeletonHeight, string>;
