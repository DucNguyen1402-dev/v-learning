import { type RefObject, useEffect, useRef } from "react";

import { isArrayShallowEqual } from "@shared/utils";

type UsePaginationResetOnDepsEffectProps = {
  enabledResetPage?: boolean;
  resetPaginationPage: (newPage?: number) => void;
  resetDeps?: readonly unknown[];
  hasJustResetPageRef: RefObject<boolean>;
  skipNextPageResetRef: RefObject<boolean>;
};

export function usePaginationResetOnDepsEffect({
  enabledResetPage = true,
  resetPaginationPage,
  resetDeps = [],
  hasJustResetPageRef,
  skipNextPageResetRef,
}: UsePaginationResetOnDepsEffectProps) {
  const prevResetDepsRef = useRef(resetDeps);

  useEffect(() => {
    if (resetDeps.length > 0) {
      const isDepsChanged = !isArrayShallowEqual(
        prevResetDepsRef.current,
        resetDeps,
      );
      prevResetDepsRef.current = resetDeps;

      if (!isDepsChanged) return;
    }

    if (skipNextPageResetRef.current) {
      skipNextPageResetRef.current = false;
      return;
    }
    if (!enabledResetPage) return;

    resetPaginationPage();
    hasJustResetPageRef.current = true;
  }, [
    resetDeps,
    resetPaginationPage,
    enabledResetPage,
    skipNextPageResetRef,
    hasJustResetPageRef,
  ]);
}
