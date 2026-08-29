import { useCallback, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { type AdminRouteKey } from "../admin";
import { ClientNavigation, type ClientRouteKey } from "../client";
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
  const currentRouteKey = useMemo(
    () => ClientNavigation.findKey(location.pathname),
    [location.pathname],
  );

  const previousRouteKey = useMemo(() => {
    const previousKey = routeHistory.at(-1) as ClientRouteKey | undefined;
    if (previousKey) return previousKey;
  }, [routeHistory]);

  const back = useCallback(() => {
    const previousKey = routeHistory.at(-1);
    const navigationAreaMeta = getNavigationAreaMeta({
      area: currentArea,
      routeKey: previousKey as ClientRouteKey | AdminRouteKey,
    });
    if (previousKey) {
      navigate(navigationAreaMeta.url, {
        state: {
          history: routeHistory.slice(0, -1),
        },
      });
    } else {
      navigate(-1);
    }
  }, [navigate, routeHistory, currentArea]);

  const forward = useCallback(
    (routeKey: ClientRouteKey, payload?: unknown) =>
      navigate(ClientNavigation.urls[routeKey], {
        state: {
          history: [...routeHistory, currentRouteKey],
          payload: payload ?? null,
        },
      }),
    [navigate, routeHistory, currentRouteKey],
  );

  const go = useCallback(
    (routeKey: ClientRouteKey | AdminRouteKey, payload?: unknown) => {
      const navigationAreaMeta = getNavigationAreaMeta({
        area: currentArea,
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
    forward,
    back,
    previousRouteKey,
  };
};
