import { useLocation } from "react-router-dom";

export const useRouteMetaContext = <T = unknown>() => {
  const location = useLocation();
  return location.state?.routeMetaContext as T | undefined;
};
