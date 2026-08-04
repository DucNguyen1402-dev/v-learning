import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@shared/utils";

import Button from "./Button";

const surfaceStyles = {
  light: "bg-primary hover:bg-primary/90",
  dark: "bg-cyan-600 hover:bg-cyan-500",
  deepDark: "bg-cyan-600 hover:bg-cyan-600/80",
};

type surfaceOption = "light" | "dark" | "deepDark";

type LoginButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  surface?: surfaceOption;
};
const LoginButton = ({
  children,
  surface = "light",
  ...props
}: LoginButtonProps) => {
  return (
    <Button
      className={cn(
        "text-slate-50",
        surfaceStyles[surface] ?? surfaceStyles.light,
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default LoginButton;
