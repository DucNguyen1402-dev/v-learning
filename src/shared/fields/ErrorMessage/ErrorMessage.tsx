import type { ReactNode } from "react";

import { cn } from "@shared/utils";

type ErrorMessageProps = {
  error?: string;
  children?: ReactNode;
  className: string | undefined;
};

const ErrorMessage = ({ error, children, className }: ErrorMessageProps) => {
  const content = error ?? children;
  if (!content) return null;

  return (
    <p
      className={cn(
        "z-20 w-full rounded-sm border-l-5 px-2 py-2 text-xs",
        "border-red-300 bg-red-50 text-red-700",
        "dark:border-red-600 dark:bg-red-950/40 dark:text-red-300",
        className,
      )}
    >
      {content}
    </p>
  );
};

export default ErrorMessage;
