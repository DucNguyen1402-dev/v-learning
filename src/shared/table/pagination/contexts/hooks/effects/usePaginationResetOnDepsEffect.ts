import { useCallback, useEffect, useRef, useState } from "react";

import { isArrayShallowEqual } from "@shared/utils";

type UsePaginationResetOnDepsEffectProps = {
  resetPaginationPage: (newPage?: number) => void;
  enabledResetPage?: boolean;
  resetDeps?: readonly unknown[];
};

export function usePaginationResetOnDepsEffect({
  resetPaginationPage,
  enabledResetPage: propEnabledResetPage = false,
  resetDeps: propResetDeps,
}: UsePaginationResetOnDepsEffectProps) {
  type Meta = {
    resetDeps: readonly unknown[];
    enabledResetPage: boolean;
    skipNextPageReset: boolean;
  };
  const [meta, setMeta] = useState<Meta>({
    resetDeps: propResetDeps ?? [],
    enabledResetPage: propEnabledResetPage,
    skipNextPageReset: false,
  });
  const hasJustResetPageRef = useRef(false);
  const getHasJustResetPage = useCallback(
    () => hasJustResetPageRef.current,
    [],
  );

  const clearPageJustReset = useCallback(() => {
    hasJustResetPageRef.current = false;
  }, []);

  const skipNextPageReset = useCallback(() => {
    setMeta((prev) => ({ ...prev, skipNextPageReset: true }));
  }, []);

  const setEnabledResetPage = useCallback(() => {
    setMeta((prev) => ({ ...prev, enabledResetPage: true }));
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

  useEffect(() => {
    if (propEnabledResetPage) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setEnabledResetPage();
    }
  }, [propEnabledResetPage, setEnabledResetPage]);

  const prevResetDepsRef = useRef<readonly unknown[]>(meta.resetDeps);
  useEffect(() => {
    if (meta.resetDeps.length > 0) {
      const isDepsChanged = !isArrayShallowEqual(
        prevResetDepsRef.current,
        meta.resetDeps,
      );
      prevResetDepsRef.current = meta.resetDeps;

      if (!isDepsChanged) return;
    }

    if (meta.skipNextPageReset) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMeta((prev) => ({ ...prev, skipNextPageReset: false }));
      return;
    }
    if (!meta.enabledResetPage) return;
    setMeta((prev) => ({ ...prev, enabledResetPage: false }));

    resetPaginationPage();
    hasJustResetPageRef.current = true;
  }, [
    meta.resetDeps,
    resetPaginationPage,
    meta.enabledResetPage,
    meta.skipNextPageReset,
    hasJustResetPageRef,
  ]);

  return {
    skipNextPageReset,
    setEnabledResetPage,
    setResetDeps,
    getHasJustResetPage,
    clearPageJustReset,
  };
}
