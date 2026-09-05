import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

type UseScrollOnRouteChangeProps = {
  enabled?: boolean;
  behavior?: ScrollBehavior;
  block?: ScrollLogicalPosition;
};
export const useScrollOnRouteChange = ({
  enabled = true,
  behavior = "auto",
  block = "start",
}: UseScrollOnRouteChangeProps = {}) => {
  const { pathname } = useLocation();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
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
