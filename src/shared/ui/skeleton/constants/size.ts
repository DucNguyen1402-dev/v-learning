export const SKELETON_WIDTHS = {
  XS: "xs",
  SM: "sm",
  MD: "md",
  LG: "lg",
  XL: "xl",
  "2XL": "2xl",
} as const;

export type SkeletonWidth =
  (typeof SKELETON_WIDTHS)[keyof typeof SKELETON_WIDTHS];

export const SKELETON_HEIGHTS = {
  XS: "xs",
  SM: "sm",
  MD: "md",
  LG: "lg",
  XL: "xl",
  "2XL": "2xl",
} as const;

export type SkeletonHeight =
  (typeof SKELETON_HEIGHTS)[keyof typeof SKELETON_HEIGHTS];
