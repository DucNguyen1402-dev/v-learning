import { type ReactNode, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import { cn } from "@shared/utils";

import { ClientNavigation, type ClientRouteBuilderKey } from "../client";

type ForwardProps = {
  children: ReactNode;
  routeBuilderKey: ClientRouteBuilderKey;
  payload?: unknown;
  className?: string;
  disabled?: boolean;
  param: string;
};

type RouteState = {
  history?: string[];
};

export const ForwardWithParam = ({
  children,
  routeBuilderKey,
  payload,
  className,
  disabled,
  param,
}: ForwardProps) => {
  const location = useLocation();
  const state: RouteState | null = location.state;
  const routeHistory = useMemo(() => state?.history ?? [], [state?.history]);

  const to = ClientNavigation.builders[routeBuilderKey](param);

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
        routeBuilderKey: routeBuilderKey,
      }}
      className={cn(className, {
        "pointer-events-none cursor-default": disabled,
      })}
    >
      {children}
    </Link>
  );
};
