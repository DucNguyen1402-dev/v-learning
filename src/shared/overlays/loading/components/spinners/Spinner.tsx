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
          colorClass.glow,
          sizeClass.outer,
          className,
        )}
      />
      <div
        className={cn(
          "animate-spin rounded-full [animation-duration:2s]",
          colorClass.ring,
          sizeClass.inner,
        )}
      />
    </div>
  );
};
export default Spinner;
