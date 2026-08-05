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

  return <p className={cn("error-message", className)}>{content}</p>;
};

export default ErrorMessage;
