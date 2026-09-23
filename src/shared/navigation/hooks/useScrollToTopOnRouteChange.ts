import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

type UseScrollToTopOnRouteChangeProps = {
  enabled?: boolean;
  behavior?: ScrollBehavior;
  block?: ScrollLogicalPosition;
};
export const useScrollToTopOnRouteChange = ({
  enabled = true,
  behavior = "instant",
}: UseScrollToTopOnRouteChangeProps = {}) => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if (!enabled) return;

    window.scrollTo({
      top: 0,
      behavior,
    });
  }, [pathname, enabled, behavior]);
};
