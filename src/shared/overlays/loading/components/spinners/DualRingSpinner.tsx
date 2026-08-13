import {
  type DualSpinnerColor,
  dualSpinnerColorClasses,
  type DualSpinnerSize,
  dualSpinnerSizeClasses,
} from "@shared/overlays/loading/config";
import { cn } from "@shared/utils";

type DualRingSpinnerProps = {
  size?: DualSpinnerSize;
  color?: DualSpinnerColor;
};

export const DualRingSpinner = ({
  size = "md",
  color = "primary",
}: DualRingSpinnerProps) => {
  const sizeClass = dualSpinnerSizeClasses[size] ?? dualSpinnerSizeClasses.md;
  const { outer, inner } =
    dualSpinnerColorClasses[color] ?? dualSpinnerColorClasses.primary;
  return (
    <div className={cn("dual-ring-container", sizeClass)}>
      <div className={cn("dual-ring-outer", outer)}></div>
      <div className={cn("dual-ring-inner", inner)}></div>
    </div>
  );
};
