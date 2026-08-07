import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { CLIENT_ROUTES } from "@routes/client";

type UseScrollOnRouteChangeProps = {
  ref?: React.RefObject<HTMLElement | null>;
  enabled?: boolean;
};
export const useScrollOnRouteChange = ({
  ref,
  enabled = true,
}: UseScrollOnRouteChangeProps) => {
  const { pathname } = useLocation();
  const isHome = pathname === CLIENT_ROUTES.home;

  useEffect(() => {
    if (!enabled) return;

    if (isHome || !ref?.current) {
      window.scrollTo(0, 0);
    } else {
      ref.current.scrollIntoView({
        behavior: "auto",
        block: "start",
      });
    }
  }, [pathname, enabled, ref, isHome]);
};
