import type { ReactNode } from "react";

import { cn } from "@shared/utils";

import { type AdminRouteKey } from "../admin";
import { type ClientRouteKey } from "../client";
import { useCurrentArea } from "../hooks";
import { getNavigationAreaMeta } from "./utils";

type ForwardProps = {
  children: ReactNode;
  routeKey: ClientRouteKey | AdminRouteKey;
  payload?: unknown;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
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
  const currentArea = useCurrentArea();
  const navigationAreaMeta = getNavigationAreaMeta({
    area: currentArea,
    routeKey,
  });

  return (
    <Link
      to={navigationAreaMeta.url}
      state={{ payload: payload ?? null }}
      className={cn(className, {
        "pointer-events-none cursor-default": disabled,
      })}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};
