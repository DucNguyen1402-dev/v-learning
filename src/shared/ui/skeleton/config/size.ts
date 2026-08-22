import {
  SKELETON_HEIGHTS,
  SKELETON_WIDTHS,
  type SkeletonHeight,
  type SkeletonWidth,
} from "../constants";

export const skeletonWidths = {
  [SKELETON_WIDTHS["2XS"]]: "2.5rem",
  [SKELETON_WIDTHS.XS]: "4rem",
  [SKELETON_WIDTHS.SM]: "6rem",
  [SKELETON_WIDTHS.MD]: "8rem",
  [SKELETON_WIDTHS.LG]: "12rem",
  [SKELETON_WIDTHS.XL]: "16rem",
  [SKELETON_WIDTHS["2XL"]]: "20rem",
} as const satisfies Record<SkeletonWidth, string>;

export const skeletonHeights = {
  [SKELETON_HEIGHTS.XS]: "0.75rem",
  [SKELETON_HEIGHTS.SM]: "1rem",
  [SKELETON_HEIGHTS.MD]: "1.5rem",
  [SKELETON_HEIGHTS.LG]: "2rem",
  [SKELETON_HEIGHTS.XL]: "2.5rem",
  [SKELETON_HEIGHTS["2XL"]]: "3rem",
} as const satisfies Record<SkeletonHeight, string>;
