import { type ReactNode, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import { cn } from "@shared/utils";

import { type AdminRouteBuilderKey } from "../admin";
import { type ClientRouteBuilderKey } from "../client";
import { getNavigationAreaBuilderMeta } from "../helpers";
import { getRouteHistory } from "../utils";

type ForwardProps = {
  children: ReactNode;
  builderRouteKey: ClientRouteBuilderKey | AdminRouteBuilderKey;
  payload?: unknown;
  className?: string;
  disabled?: boolean;
  param: string;
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

  const routeHistory = getRouteHistory({ location }) ?? [];

  const { urlBuilder, currentRouteKey } = useMemo(
    () =>
      getNavigationAreaBuilderMeta({
        builderRouteKey: builderRouteKey,
        pathname: location.pathname,
      }),
    [builderRouteKey, location.pathname],
  );

  return (
    <Link
      to={urlBuilder(param)}
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
