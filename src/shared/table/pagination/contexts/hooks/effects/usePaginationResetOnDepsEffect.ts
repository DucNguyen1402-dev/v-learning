import { type RefObject, useEffect } from "react";

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
  useEffect(() => {
    if (skipNextPageResetRef.current) {
      skipNextPageResetRef.current = false;
      return;
    }
    if (!enabledResetPage) return;

    resetPaginationPage();
    hasJustResetPageRef.current = true;
  }, [
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ...resetDeps,
    resetPaginationPage,
    enabledResetPage,
    skipNextPageResetRef,
    hasJustResetPageRef,
  ]);
}
