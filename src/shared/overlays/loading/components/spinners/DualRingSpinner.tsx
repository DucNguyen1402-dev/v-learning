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
    <div className={cn("relative", sizeClass)}>
      <div
        className={cn(
          "absolute inset-0 animate-spin rounded-full border-2 border-transparent",
          outer,
        )}
      ></div>
      <div
        className={cn(
          "absolute inset-1 animate-[spin_1.5s_linear_infinite_reverse] rounded-full border-2 border-transparent",
          inner,
        )}
      ></div>
    </div>
  );
};
