import { type ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import { cn } from "@shared/utils";

type BackProps = {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};

export const Back = ({ children, className, disabled }: BackProps) => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      className={cn(className, {
        "pointer-events-none cursor-default": disabled,
      })}
    >
      {children}
    </button>
  );
};
