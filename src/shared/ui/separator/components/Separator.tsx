import { cn } from "@shared/utils";

import { separatorOrientationMap } from "../config";
import { SEPARATOR_ORIENTATION, type SeparatorOrientation } from "../constants";
type SeparatorProps = {
  orientation?: SeparatorOrientation;
  className?: string;
};
export const Separator = ({
  orientation = SEPARATOR_ORIENTATION.HORIZONTAL,
  className,
}: SeparatorProps) => {
  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={cn(
        "separator",
        separatorOrientationMap[orientation],
        className,
      )}
    />
  );
};
