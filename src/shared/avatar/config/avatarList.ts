import {
  avatar01,
  avatar02,
  avatar03,
  avatar04,
  avatar05,
  avatar06,
  avatar07,
  avatar08,
  avatar09,
  avatar10,
  avatar11,
  avatar12,
  avatar13,
  avatar14,
} from "@assets/images";

export const avatarList = [
  avatar01,
  avatar02,
  avatar03,
  avatar04,
  avatar05,
  avatar06,
  avatar07,
  avatar08,
  avatar09,
  avatar10,
  avatar11,
  avatar12,
  avatar13,
  avatar14,
] as const;

type ToNumber<T> = T extends `${infer N extends number}` ? N : never;

export type AvatarIndex = ToNumber<Exclude<keyof typeof avatarList, keyof []>>;
