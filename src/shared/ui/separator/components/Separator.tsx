import { cn } from "@shared/utils";

import { separatorIntentMap, separatorOrientationMap } from "../config";
import {
  SEPARATOR_INTENTS,
  SEPARATOR_ORIENTATION,
  type SeparatorIntent,
  type SeparatorOrientation,
} from "../constants";
type SeparatorProps = {
  orientation?: SeparatorOrientation;
  className?: string;
  intent?: SeparatorIntent;
};
export const Separator = ({
  orientation = SEPARATOR_ORIENTATION.HORIZONTAL,
  className,
  intent = SEPARATOR_INTENTS.SECONDARY,
}: SeparatorProps) => {
  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={cn(
        "separator",
        separatorOrientationMap[orientation],
        separatorIntentMap[intent],
        className,
      )}
    />
  );
};
