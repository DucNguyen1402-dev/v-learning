import { type ReactNode, useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { cn } from "@shared/utils";

import { ClientNavigation, type ClientRouteKey } from "../client";

type BackProps = {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};

type RouteState = {
  history?: string[];
};

export const Back = ({ children, className, disabled }: BackProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const state: RouteState | null = location.state;
  const routeHistory = useMemo(() => state?.history ?? [], [state?.history]);

  const previousKey = routeHistory.at(-1) as ClientRouteKey | undefined;

  const to = previousKey ? ClientNavigation.urls[previousKey] : -1;

  if (to === -1) {
    return (
      <button
        onClick={() => navigate(-1)}
        className={cn(className, {
          "pointer-events-none cursor-default": disabled,
        })}
      >
        {children}
      </button>
    );
  }

  return (
    <Link
      to={to}
      state={{ history: routeHistory.slice(0, -1) }}
      className={cn(className, {
        "pointer-events-none cursor-default": disabled,
      })}
    >
      {children}
    </Link>
  );
};
