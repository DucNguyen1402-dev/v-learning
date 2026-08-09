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
    <label
      htmlFor={htmlFor}
      className={cn("text-primary block w-fit cursor-pointer", className)}
    >
      {children}
      {required && <span className="ml-1.5 text-required">*</span>}
    </label>
  );
};
