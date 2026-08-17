import type { ReactNode } from "react";

import { cn } from "@shared/utils";

import { InputProvider } from "./contexts";

type InputRootProps = {
  className?: string;
  children: ReactNode;
};
export const InputRoot = ({ className, children }: InputRootProps) => {
  return (
    <div className={cn("relative flex flex-col gap-2", className)}>
      <InputProvider>{children}</InputProvider>
    </div>
  );
};

InputRoot.displayName = "InputRoot";
