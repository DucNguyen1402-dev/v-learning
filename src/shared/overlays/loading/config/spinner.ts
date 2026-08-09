export const spinnerSizeClasses = {
  sm: {
    outer: "h-5 w-5",
    inner: "h-3 w-3 border-2",
  },
  md: {
    outer: "h-6 w-6",
    inner: "h-4 w-4 border-[3px]",
  },
  lg: {
    outer: "h-8 w-8",
    inner: "h-6 w-6 border-4",
  },
} as const;

export const spinnerVariants = {
  brand: {
    glow: "bg-blue-500/20",
    ring: "border-t-blue-500",
  },
  inverse: {
    glow: "bg-white/20",
    ring: "border-t-white",
  },
  inherit: {
    glow: "bg-current/20",
    ring: "border-t-current",
  },
} as const;
