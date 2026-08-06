import {
  spinnerSizeClasses,
  spinnerVariants,
} from "@shared/overlays/loading/config";
import { cn } from "@shared/utils";

type size = "sm" | "md" | "lg";
type color = "brand" | "inverse" | "inherit";

type SpinnerProps = {
  size?: size;
  color?: color;
  className?: string;
};

const Spinner = ({
  size = "md",
  color = "brand",
  className = "",
}: SpinnerProps) => {
  const colorClass = spinnerVariants[color];
  const sizeClass = spinnerSizeClasses[size] ?? spinnerSizeClasses.md;

  return (
    <div className="relative flex items-center justify-center">
      <div
        className={cn(
          "absolute rounded-full blur-sm",
          { ...colorClass },
          sizeClass.outer,
          className,
        )}
      />
      <div
        className={cn("animate-spin rounded-full", colorClass, sizeClass.inner)}
      />
    </div>
  );
};
export default Spinner;
