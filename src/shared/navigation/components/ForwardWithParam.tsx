import { type ReactNode, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import { cn } from "@shared/utils";

import { type AdminRouteBuilderKey } from "../admin";
import { type ClientRouteBuilderKey } from "../client";
import { getNavigationAreaBuilderMeta } from "../helpers";
import { useCurrentArea } from "../hooks";

type ForwardProps = {
  children: ReactNode;
  builderRouteKey: ClientRouteBuilderKey | AdminRouteBuilderKey;
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
  builderRouteKey,
  payload,
  className,
  disabled,
  param,
}: ForwardProps) => {
  const location = useLocation();
  const state: RouteState | null = location.state;
  const routeHistory = useMemo(() => state?.history ?? [], [state?.history]);

  const currentArea = useCurrentArea();
  const navigationAreaMeta = useMemo(
    () =>
      getNavigationAreaBuilderMeta({
        area: currentArea,
        builderRouteKey: builderRouteKey,
      }),
    [currentArea, builderRouteKey],
  );

  const currentRouteKey = useMemo(
    () => navigationAreaMeta.navigationArea.findKey(location.pathname),
    [navigationAreaMeta, location.pathname],
  );

  return (
    <Link
      to={navigationAreaMeta.builderUrl(param)}
      state={{
        history: [...routeHistory, currentRouteKey],
        payload: payload ?? null,
        routeBuilderKey: builderRouteKey,
      }}
      className={cn(className, {
        "pointer-events-none cursor-default": disabled,
      })}
    >
      {children}
    </Link>
  );
};
