import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@shared/utils";

import Button from "./Button";

type LoginButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};
const LoginButton = ({ children, className, ...props }: LoginButtonProps) => {
  return (
    <Button className={cn("button-primary", className)} {...props}>
      {children}
    </Button>
  );
};

export default LoginButton;
