import type { ReactNode } from "react";

import { cn } from "@shared/utils";

type InputRootProps = {
  className?: string;
  children: ReactNode;
};
export const InputRoot = ({ className, children }: InputRootProps) => {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="relative">{children}</div>
    </div>
  );
};

InputRoot.displayName = "InputRoot";
