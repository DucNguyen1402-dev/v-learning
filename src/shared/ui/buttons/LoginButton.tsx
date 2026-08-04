import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@shared/utils";

import Button from "./Button";

type LoginButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};
const LoginButton = ({ children, className, ...props }: LoginButtonProps) => {
  return (
    <Button
      className={cn(
        "text-slate-50",
        "bg-primary hover:bg-primary/90",
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default LoginButton;
