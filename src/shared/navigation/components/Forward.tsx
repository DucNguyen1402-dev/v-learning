import { type ReactNode, useMemo } from "react";
import { useLocation } from "react-router-dom";

import { cn } from "@shared/utils";

import { ClientNavigation, type ClientRouteKey } from "../client";

type ForwardProps = {
  children: ReactNode;
  routeKey: ClientRouteKey;
  payload?: unknown;
  className?: string;
  disabled?: boolean;
  param?: string;
  action?: string;
};
import { Link } from "react-router-dom";

type RouteState = {
  history?: string[];
};

export const Forward = ({
  children,
  routeKey,
  payload,
  className,
  disabled,
}: ForwardProps) => {
  const location = useLocation();

  const state: RouteState | null = location.state;
  const routeHistory = useMemo(() => state?.history ?? [], [state?.history]);

  const to = ClientNavigation.paths[routeKey];

  const currentRouteKey = useMemo(
    () => ClientNavigation.findKey(location.pathname),
    [location.pathname],
  );
  return (
    <Link
      to={to}
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
