import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type UseScrollOnRouteChangeProps = {
  ref?: React.RefObject<HTMLElement | null>;
  enabled?: boolean;
};
export const useScrollOnRouteChange = ({
  ref,
  enabled = true,
}: UseScrollOnRouteChangeProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!enabled) return;

    if (ref?.current) {
      ref.current.scrollIntoView({
        behavior: "auto",
        block: "start",
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, enabled, ref]);
};
