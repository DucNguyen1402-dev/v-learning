import { SEPARATOR_ORIENTATION, type SeparatorOrientation } from "./constants";

export const separatorOrientationMap = {
  [SEPARATOR_ORIENTATION.HORIZONTAL]: "w-full h-px",
  [SEPARATOR_ORIENTATION.VERTICAL]: "h-full w-px",
} as const satisfies Record<SeparatorOrientation, string>;
