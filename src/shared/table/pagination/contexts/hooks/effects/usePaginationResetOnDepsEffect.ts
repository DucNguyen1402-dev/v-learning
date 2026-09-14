import { useCallback, useEffect, useRef, useState } from "react";

import { isArrayShallowEqual } from "@shared/utils";

type UsePaginationResetOnDepsEffectProps = {
  resetPaginationPage: (newPage?: number) => void;
  resetDeps?: readonly unknown[];
};

export function usePaginationResetOnDepsEffect({
  resetPaginationPage,
  resetDeps: propResetDeps,
}: UsePaginationResetOnDepsEffectProps) {
  type Meta = {
    resetDeps: readonly unknown[];
  };
  const [meta, setMeta] = useState<Meta>({
    resetDeps: propResetDeps ?? [],
  });

  const skipNextPageResetRef = useRef(false);
  const skipNextPageReset = useCallback(() => {
    skipNextPageResetRef.current = true;
  }, []);

  const hasJustResetPageRef = useRef(false);
  const getHasJustResetPage = useCallback(
    () => hasJustResetPageRef.current,
    [],
  );
  const clearPageJustReset = useCallback(() => {
    hasJustResetPageRef.current = false;
  }, []);

  const setResetDeps = useCallback((resetDeps: readonly unknown[]) => {
    setMeta((prev) => {
      if (isArrayShallowEqual(prev.resetDeps, resetDeps)) {
        return prev;
      }
      return {
        ...prev,
        resetDeps,
      };
    });
  }, []);

  useEffect(() => {
    if (propResetDeps !== undefined) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setResetDeps(propResetDeps);
    }
  }, [propResetDeps, setResetDeps]);

  const prevResetDepsRef = useRef<readonly unknown[]>(meta.resetDeps);
  useEffect(() => {
    // check if the reset dependencies have changed
    const isDepsChanged = !isArrayShallowEqual(
      prevResetDepsRef.current,
      meta.resetDeps,
    );
    prevResetDepsRef.current = meta.resetDeps;

    if (!isDepsChanged) return;

    // skip the next page reset if flagged
    if (skipNextPageResetRef.current) {
      skipNextPageResetRef.current = false;
      return;
    }

    resetPaginationPage();
    hasJustResetPageRef.current = true;
  }, [
    meta.resetDeps,
    resetPaginationPage,
    skipNextPageResetRef,
    hasJustResetPageRef,
  ]);

  return {
    skipNextPageReset,
    setResetDeps,
    getHasJustResetPage,
    clearPageJustReset,
  };
}
