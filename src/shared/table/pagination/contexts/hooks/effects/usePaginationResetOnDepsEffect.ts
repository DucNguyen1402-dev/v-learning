import {
  type RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { isArrayShallowEqual } from "@shared/utils";

type UsePaginationResetOnDepsEffectProps = {
  enabledResetPage?: boolean;
  resetPaginationPage: (newPage?: number) => void;
  hasJustResetPageRef: RefObject<boolean>;
};

type Meta = {
  resetDeps: readonly unknown[];
  enabledResetPage: boolean;
  skipNextPageReset: boolean;
};
export function usePaginationResetOnDepsEffect({
  resetPaginationPage,
  hasJustResetPageRef,
}: UsePaginationResetOnDepsEffectProps) {
  const [meta, setMeta] = useState<Meta>({
    resetDeps: [],
    enabledResetPage: false,
    skipNextPageReset: false,
  });

  const skipNextPageReset = useCallback(() => {
    setMeta((prev) => ({ ...prev, skipNextPageReset: true }));
  }, []);

  const setEnabledResetPage = useCallback(() => {
    setMeta((prev) => ({ ...prev, enabledResetPage: true }));
  }, []);

  const setResetDeps = useCallback(
    (resetDeps: readonly unknown[]) => {
      if (!isArrayShallowEqual(meta.resetDeps, resetDeps)) {
        setMeta((prev) => ({
          ...prev,
          resetDeps: resetDeps,
        }));
      }
    },
    [meta.resetDeps],
  );

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
  };
}
