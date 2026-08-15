export const SKELETON_RADIUS = {
  none: "none",
  XS: "xs",
  SM: "sm",
  MD: "md",
  LG: "lg",
  XL: "xl",
  FULL: "full",
} as const;

export type SkeletonRadius =
  (typeof SKELETON_RADIUS)[keyof typeof SKELETON_RADIUS];
