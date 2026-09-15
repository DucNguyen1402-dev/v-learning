import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { isArrayShallowEqual } from "@shared/utils";

import type { UsePaginationStateResult } from "../usePaginationState";

type UsePaginationResetOnDepsEffectProps = {
  resetPagination: UsePaginationStateResult["resetPagination"]["all"];
  resetDeps?: readonly unknown[];
};

export function usePaginationResetOnDepsEffect({
  resetPagination,
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
  useLayoutEffect(() => {
    // check if the reset dependencies have changed
    const isDepsChanged = !isArrayShallowEqual(
      prevResetDepsRef.current,
      meta.resetDeps,
    );

    if (!isDepsChanged) return;
    prevResetDepsRef.current = meta.resetDeps;

    // skip the next page reset if flagged
    if (skipNextPageResetRef.current) {
      skipNextPageResetRef.current = false;
      return;
    }

    resetPagination();
  }, [meta.resetDeps, resetPagination, skipNextPageResetRef]);

  return {
    skipNextPageReset,
    setResetDeps,
  };
}
