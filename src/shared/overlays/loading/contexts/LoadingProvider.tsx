import { type ReactNode, useCallback, useMemo, useState } from "react";

import { LoadingContext } from "./LoadingContext";
import type { LoadingContextValues } from "./LoadingContextValues";

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);

  const show = useCallback(() => setIsVisible(true), []);
  const hide = useCallback(() => setIsVisible(false), []);

  const value: LoadingContextValues = useMemo(
    () => ({
      isVisible,
      loader: {
        show,
        hide,
      },
    }),
    [isVisible, show, hide],
  );

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
};
