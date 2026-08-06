import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@shared/utils";

import Button from "./Button";

type LoginButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
  loading: boolean;
};
const LoginButton = ({
  children,
  className,
  loading,
  ...props
}: LoginButtonProps) => {
  return (
    <Button
      className={cn("button-primary", className)}
      loading={loading}
      {...props}
    >
      {children}
    </Button>
  );
};

export default LoginButton;
