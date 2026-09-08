import { type ReactNode, useMemo } from "react";
import { useLocation } from "react-router-dom";

import { cn } from "@shared/utils";

import { getNavigationAreaMeta } from "../../helpers";
import type { AppRouteKey } from "../../types";
import { getRouteHistory } from "../../utils";

type ForwardProps = {
  children: ReactNode;
  routeKey: AppRouteKey;
  payload?: unknown;
  className?: string;
  disabled?: boolean;
  param?: string;
  action?: string;
};
import { Link } from "react-router-dom";

export const Forward = ({
  children,
  routeKey,
  payload,
  className,
  disabled,
}: ForwardProps) => {
  const location = useLocation();

  const routeHistory = getRouteHistory({ location });
  const pathname = location.pathname;

  const { path, currentRouteKey } = useMemo(
    () =>
      getNavigationAreaMeta({
        routeKey,
        pathname,
      }),
    [routeKey, pathname],
  );

  return (
    <Link
      to={path}
      state={{
        history: [...routeHistory, currentRouteKey],
        payload: payload ?? null,
      }}
      className={cn(className, {
        "pointer-events-none cursor-default": disabled,
      })}
    >
      {children}
    </Link>
  );
};
