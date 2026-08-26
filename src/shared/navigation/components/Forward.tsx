import { type ReactNode, useMemo } from "react";
import { useLocation } from "react-router-dom";

import { cn } from "@shared/utils";

import { type AdminRouteKey } from "../admin";
import { type ClientRouteKey } from "../client";
import { getNavigationAreaMeta } from "./utils";

type ForwardProps = {
  children: ReactNode;
  routeKey: ClientRouteKey | AdminRouteKey;
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

  const navigationAreaMeta = getNavigationAreaMeta(routeKey);

  return (
    <Link
      to={navigationAreaMeta.path}
      state={{
        history: [...routeHistory, navigationAreaMeta.currentRouteKey],
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
