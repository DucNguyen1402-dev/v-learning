export const AVATAR_SIZES = {
  XS: "XS",
  SM: "SM",
  MD: "MD",
  LG: "LG",
  XL: "XL",
  "2XL": "2XL",
  "3XL": "3XL",
  "4XL": "4XL",
} as const;

export type AvatarSize = keyof typeof AVATAR_SIZES;
