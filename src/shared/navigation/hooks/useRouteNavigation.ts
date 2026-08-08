import { useCallback, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { CLIENT_ROUTES, findRouteKey, type RouteKey } from "@routes";

type RouteState = {
  history?: string[];
};

export const useRouteNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state as RouteState | null;
  const routeHistory = useMemo(() => state?.history ?? [], [state?.history]);
  const currentRouteKey = useMemo(() => {
    const key = location.state?.currentKey as RouteKey | undefined;
    if (key) return key;

    return findRouteKey(location.pathname);
  }, [location.pathname, location.state?.currentKey]);

  const previousRouteKey = useMemo(() => {
    const previousKey = routeHistory.at(-1) as RouteKey | undefined;
    if (previousKey) return previousKey;
  }, [routeHistory]);

  const back = useCallback(() => {
    const previousKey = routeHistory.at(-1) as RouteKey | undefined;
    if (previousKey) {
      navigate(CLIENT_ROUTES[previousKey], {
        state: {
          history: routeHistory.slice(0, -1),
        },
      });
    } else {
      navigate(-1);
    }
  }, [navigate, routeHistory]);

  const forward = useCallback(
    (routeKey: RouteKey, payload?: unknown) =>
      navigate(CLIENT_ROUTES[routeKey], {
        state: {
          history: [...routeHistory, currentRouteKey],
          payload: payload ?? null,
        },
      }),
    [navigate, routeHistory, currentRouteKey],
  );

  const go = useCallback(
    (routeKey: RouteKey, payload?: unknown) =>
      navigate(CLIENT_ROUTES[routeKey], {
        state: {
          payload: payload ?? null,
        },
      }),
    [navigate],
  );

  return {
    back,
    forward,
    go,
    previousRouteKey,
  };
};
