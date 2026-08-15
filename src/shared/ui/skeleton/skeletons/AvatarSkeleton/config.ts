import { AVATAR_SIZES, type AvatarSize } from "./constants";

export const avatarSizes = {
  [AVATAR_SIZES.XS]: "1.5rem", // 24
  [AVATAR_SIZES.SM]: "2rem", // 32
  [AVATAR_SIZES.MD]: "2.5rem", // 40
  [AVATAR_SIZES.LG]: "3rem", // 48
  [AVATAR_SIZES.XL]: "3.5rem", // 56
  [AVATAR_SIZES["2XL"]]: "4rem", // 64
  [AVATAR_SIZES["3XL"]]: "5rem", // 80
  [AVATAR_SIZES["4XL"]]: "6rem", // 96
} as const satisfies Record<AvatarSize, string>;
