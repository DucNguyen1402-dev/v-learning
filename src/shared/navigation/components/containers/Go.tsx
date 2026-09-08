import { useMemo } from "react";
import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";

import { cn } from "@shared/utils";

import { getNavigationAreaMeta } from "../../helpers";
import type { AppRouteKey } from "../../types";
import { isRouteActive } from "../../utils";

type ForwardProps = {
  children: ReactNode;
  routeKey: AppRouteKey;
  payload?: unknown;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  area?: "admin" | "client";
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
  const navigationAreaMeta = useMemo(
    () =>
      getNavigationAreaMeta({
        routeKey,
      }),
    [routeKey],
  );

  const { pathname } = useLocation();
  const isActive = isRouteActive(pathname, routeKey);

  return (
    <Link
      to={navigationAreaMeta.path}
      state={{ payload: payload ?? null }}
      className={cn(className, {
        "pointer-events-none cursor-default": disabled || isActive,
      })}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};
