import { useCallback, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { type AdminRouteKey } from "../admin";
import { type ClientRouteKey } from "../client";
import { getNavigationAreaMeta } from "../helpers";
import { useCurrentArea } from "./useCurrentArea";

type RouteState = {
  history?: string[];
};

export const useRouteNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentArea = useCurrentArea();
  const state = location.state as RouteState | null;
  const routeHistory = useMemo(() => state?.history ?? [], [state?.history]);

  const previousRouteKey = useMemo(() => {
    const previousKey = routeHistory.at(-1) as
      ClientRouteKey | AdminRouteKey | undefined;
    if (previousKey) return previousKey;
  }, [routeHistory]);

  const back = useCallback(() => {
    if (previousRouteKey) {
      const navigationAreaMeta = getNavigationAreaMeta({
        area: currentArea,
        routeKey: previousRouteKey as ClientRouteKey | AdminRouteKey,
      });
      navigate(navigationAreaMeta.url, {
        state: {
          history: routeHistory.slice(0, -1),
        },
      });
    } else {
      navigate(-1);
    }
  }, [previousRouteKey, currentArea, navigate, routeHistory]);

  const go = useCallback(
    (
      routeKey: ClientRouteKey | AdminRouteKey,
      area?: "admin" | "client",
      payload?: unknown,
    ) => {
      const navigationAreaMeta = getNavigationAreaMeta({
        area: area ?? currentArea,
        routeKey,
      });

      navigate(navigationAreaMeta.url, {
        state: {
          payload: payload ?? null,
        },
      });
    },
    [navigate, currentArea],
  );

  return {
    go,
    back,
    previousRouteKey,
  };
};
