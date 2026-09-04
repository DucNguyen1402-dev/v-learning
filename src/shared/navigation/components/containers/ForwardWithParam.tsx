import { type ReactNode, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import { getNavigationAreaBuilderMeta } from "@shared/navigation/helpers";
import type { AppRouteBuilderKey } from "@shared/navigation/types";
import { getRouteHistory } from "@shared/navigation/utils";
import { cn } from "@shared/utils";

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

  const routeHistory = getRouteHistory({ location }) ?? [];

  const { urlBuilder, currentBuilderRouteKey } = useMemo(
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
