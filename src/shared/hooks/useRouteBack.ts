import { useCallback, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type RouteState = {
  history?: string[];
};

type routeBackParams = {
  payload?: unknown;
};

export const useRouteBack = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state as RouteState | null;

  const routeHistory = useMemo(() => state?.history ?? [], [state?.history]);
  const previousPath = routeHistory.at(-1);

  return useCallback(
    (payload?: routeBackParams) => {
      if (previousPath) {
        navigate(previousPath, {
          state: {
            history: routeHistory.slice(0, -1),
            ...(payload !== undefined && { payload }),
          },
        });
      } else {
        navigate(-1);
      }
    },
    [previousPath, navigate, routeHistory],
  );
};
