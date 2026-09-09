import { type ReactNode, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import { cn } from "@shared/utils";

import { getNavigationAreaBuilderMeta } from "../../helpers";
import type { AppRouteBuilderKey } from "../../types";
import { getRouteHistory } from "../../utils";

type ForwardProps = {
  children: ReactNode;
  builderRouteKey: AppRouteBuilderKey;
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

  const routeHistory = getRouteHistory({ location });

  const { pathBuilder, currentBuilderRouteKey } = useMemo(
    () =>
      getNavigationAreaBuilderMeta({
        builderRouteKey: builderRouteKey,
        pathname: location.pathname,
      }),
    [builderRouteKey, location.pathname],
  );

  return (
    <Link
      to={pathBuilder(param)}
      state={{
        history: [...routeHistory, currentBuilderRouteKey],
        payload: payload ?? null,
        routeMetaContext: {
          builderRouteKey,
        },
      }}
      className={cn(className, {
        "pointer-events-none cursor-default": disabled,
      })}
    >
      {children}
    </Link>
  );
};
