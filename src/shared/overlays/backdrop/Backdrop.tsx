import type { ReactNode } from "react";

import { cn } from "@shared/utils";

type BackdropSurface = "light" | "normal" | "dark";

const SURFACE_CLASSES = {
  light: "backdrop-light",
  normal: "backdrop-normal",
  dark: "backdrop-dark",
};

const DEFAULT_SURFACE = "normal";

type BackdropProps = {
  surface?: BackdropSurface;
  className?: string;
  children?: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const Backdrop = ({
  surface = DEFAULT_SURFACE,
  className = "",
  children,
  ...props
}: BackdropProps) => {
  return (
    <div
      {...props}
      className={cn(
        "backdrop",
        SURFACE_CLASSES[surface] ?? SURFACE_CLASSES[DEFAULT_SURFACE],
        className,
      )}
    >
      {children}
    </div>
  );
};
