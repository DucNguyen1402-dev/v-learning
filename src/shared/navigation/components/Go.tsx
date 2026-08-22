import type { ReactNode } from "react";

import { cn } from "@shared/utils";

import { ClientNavigation, type ClientRouteKey } from "../client";

type ForwardProps = {
  children: ReactNode;
  routeKey: ClientRouteKey;
  payload?: unknown;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};
import { Link } from "react-router-dom";

export const Go = ({
  children,
  routeKey,
  payload,
  className,
  onClick,
  disabled,
}: ForwardProps) => {
  return (
    <Link
      to={ClientNavigation.urls[routeKey]}
      state={{ payload: payload ?? null }}
      className={cn(className, {
        "pointer-events-none cursor-default": disabled,
      })}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};
