import { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

type UseScrollOnRouteChangeProps = {
  enabled?: boolean;
  behavior?: ScrollBehavior;
  block?: ScrollLogicalPosition;
};
export const useScrollOnRouteChange = ({
  enabled = true,
  behavior = "instant",
  block = "start",
}: UseScrollOnRouteChangeProps = {}) => {
  const { pathname } = useLocation();
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!enabled) return;
    if (!ref?.current) return;
    ref.current.scrollIntoView({
      behavior,
      block,
    });
  }, [pathname, enabled, ref, behavior, block]);

  return {
    scrollRef: ref,
  };
};
