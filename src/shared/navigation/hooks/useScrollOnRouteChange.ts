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

    if (ref?.current) {
      ref.current.scrollIntoView({
        behavior,
        block,
      });
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, enabled, ref, behavior, block]);

  return {
    scrollRef: ref,
    scrollMarginTop: "scroll-mt-36",
  };
};
