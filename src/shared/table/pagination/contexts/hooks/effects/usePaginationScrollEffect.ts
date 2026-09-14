import { useCallback, useLayoutEffect, useRef, useState } from "react";

type UsePaginationScrollEffectProps = {
  clearPageJustReset: () => void;
  hasPaginationChanged: () => boolean;
  resetPaginationChanged: () => void;
  getHasJustResetPage: () => boolean;
};

export function usePaginationScrollEffect({
  getHasJustResetPage,
  clearPageJustReset,
  hasPaginationChanged,
  resetPaginationChanged,
}: UsePaginationScrollEffectProps) {
  const scrollToTargetRef = useRef<HTMLDivElement | null>(null);

  const [scrollRequestId, setScrollRequestId] = useState(0);
  const scrollRequestRef = useRef(false);

  const scrollToTarget = useCallback(() => {
    scrollRequestRef.current = true;
    setScrollRequestId((id) => id + 1);
  }, []);

  useLayoutEffect(() => {
    // has a target to scroll to
    if (!scrollToTargetRef.current) return;

    // has a change to perform scrolling
    if (!hasPaginationChanged()) return;

    // has a scroll request
    if (!scrollRequestRef.current) return;

    // if the page has just been reset, do not perform scrolling
    if (getHasJustResetPage()) {
      clearPageJustReset();
      return;
    }

    resetPaginationChanged();
    scrollRequestRef.current = false;

    const rect = scrollToTargetRef.current.getBoundingClientRect();
    const targetTop = window.scrollY + rect.top - window.innerHeight / 2;
    window.scrollTo({ top: Math.max(targetTop, 0), behavior: "instant" });
  }, [
    getHasJustResetPage,
    scrollToTargetRef,
    scrollRequestRef,
    scrollRequestId,
    hasPaginationChanged,
    resetPaginationChanged,
    clearPageJustReset,
  ]);

  return { scrollToTargetRef, scrollToTarget };
}
