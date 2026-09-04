import { type ReactNode, useMemo } from "react";
import { Link } from "react-router-dom";

import { getNavigationAreaBuilderMeta } from "@shared/navigation/helpers";
import type { AppRouteBuilderKey } from "@shared/navigation/types";
import { cn } from "@shared/utils";

type GoWithParamProps = {
  children: ReactNode;
  builderRouteKey: AppRouteBuilderKey;
  payload?: unknown;
  className?: string;
  disabled?: boolean;
  param: string;
};

export const GoWithParam = ({
  children,
  builderRouteKey,
  payload,
  className,
  disabled,
  param,
}: GoWithParamProps) => {
  const { urlBuilder } = useMemo(
    () =>
      getNavigationAreaBuilderMeta({
        builderRouteKey: builderRouteKey,
      }),
    [builderRouteKey],
  );

  return (
    <Link
      to={urlBuilder(param)}
      state={{
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
