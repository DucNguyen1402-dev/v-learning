import type { ReactNode } from "react";

import { cn } from "@shared/utils";

type FieldLabelProps = {
  children?: ReactNode;
  target: string;
  selected?: boolean;
};

export const FieldLabel = ({ children, target, selected }: FieldLabelProps) => {
  return (
    <label
      htmlFor={target}
      className={cn("field-label", {
        "label-field-selected": selected,
      })}
    >
      {children}
    </label>
  );
};
