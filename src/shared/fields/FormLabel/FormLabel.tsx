import type { ReactNode } from "react";

import { cn } from "@shared/utils";

type FormLabelProps = {
  htmlFor: string;
  children: ReactNode;
  required?: boolean;
  className?: string;
};

export const FormLabel = ({
  htmlFor,
  children,
  required = false,
  className = "",
}: FormLabelProps) => {
  return (
    <label htmlFor={htmlFor} className={cn("label", className)}>
      {children}
      {required && <span className="ml-1.5 text-required">*</span>}
    </label>
  );
};
