import { AVATAR_SIZES, type AvatarSize } from "./constants";

export const avatarSizes = {
  [AVATAR_SIZES.XS]: "1.5rem",
  [AVATAR_SIZES.SM]: "2rem",
  [AVATAR_SIZES.MD]: "2.5rem",
  [AVATAR_SIZES.LG]: "3rem",
  [AVATAR_SIZES.XL]: "3.5rem",
  [AVATAR_SIZES["2XL"]]: "4rem",
  [AVATAR_SIZES["3XL"]]: "5rem",
  [AVATAR_SIZES["4XL"]]: "6rem",
} as const satisfies Record<AvatarSize, string>;
