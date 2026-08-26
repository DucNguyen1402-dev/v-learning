import {
  SEPARATOR_INTENTS,
  SEPARATOR_ORIENTATION,
  type SeparatorIntent,
  type SeparatorOrientation,
} from "./constants";

export const separatorOrientationMap = {
  [SEPARATOR_ORIENTATION.HORIZONTAL]: "w-full h-px",
  [SEPARATOR_ORIENTATION.VERTICAL]: "h-full w-px",
} as const satisfies Record<SeparatorOrientation, string>;

export const separatorIntentMap = {
  [SEPARATOR_INTENTS.PRIMARY]: "separator--primary",
  [SEPARATOR_INTENTS.SECONDARY]: "separator--secondary",
} as const satisfies Record<SeparatorIntent, string>;
