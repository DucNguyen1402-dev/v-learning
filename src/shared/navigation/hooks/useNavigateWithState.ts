import { useCallback, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { getNavigationAreaMeta } from "../helpers";
import type { AppRouteKey } from "../types";
import { getRouteHistory } from "../utils";

type PreviousRouteKey = AppRouteKey;

export const useNavigateWithState = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const routeHistory = useMemo(
    () => getRouteHistory({ location }) ?? [],
    [location],
  );
  const previousRouteKey = routeHistory.at(-1) as PreviousRouteKey | undefined;

  const back = useCallback(() => {
    if (previousRouteKey) {
      const navigationAreaMeta = getNavigationAreaMeta({
        routeKey: previousRouteKey,
      });
      navigate(navigationAreaMeta.url, {
        state: {
          history: routeHistory.slice(0, -1),
        },
      });
    } else {
      navigate(-1);
    }
  }, [previousRouteKey, navigate, routeHistory]);

  type GoParams = {
    routeKey: AppRouteKey;
    payload?: unknown;
  };
  const go = useCallback(
    ({ routeKey, payload }: GoParams) => {
      const navigationAreaMeta = getNavigationAreaMeta({
        routeKey,
      });

      navigate(navigationAreaMeta.url, {
        state: {
          payload: payload ?? null,
        },
      });
    },
    [navigate],
  );

  return {
    go,
    back,
  };
};
