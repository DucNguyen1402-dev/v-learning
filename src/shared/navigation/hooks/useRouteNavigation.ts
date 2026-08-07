import { useCallback, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { CLIENT_ROUTES, type RouteKey } from "@routes";

type RouteState = {
  history?: string[];
};

type routeBackParams = {
  payload?: unknown;
};

export const useRouteNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state as RouteState | null;
  const routeHistory = useMemo(() => state?.history ?? [], [state?.history]);
  const currentRouteKey = useMemo(() => {
    const key = location.state?.currentKey as RouteKey | undefined;

    if (key) return key;

    return CLIENT_ROUTES.findKey(location.pathname);
  }, [location.pathname, location.state?.currentKey]);

  const back = useCallback(
    (payload?: routeBackParams) => {
      const previousKey = routeHistory.at(-1) as RouteKey | undefined;

      if (previousKey) {
        navigate(CLIENT_ROUTES[previousKey], {
          state: {
            history: routeHistory.slice(0, -1),
            ...(payload !== undefined && { payload }),
          },
        });
      } else {
        navigate(-1);
      }
    },
    [navigate, routeHistory],
  );

  const forward = useCallback(
    (routeKey: RouteKey) => {
      navigate(CLIENT_ROUTES[routeKey], {
        state: {
          history: [...routeHistory, currentRouteKey],
          currentKey: routeKey,
        },
      });
    },

    [navigate, routeHistory, currentRouteKey],
  );

  return {
    back,
    forward,
    currentRouteKey,
  };
};
