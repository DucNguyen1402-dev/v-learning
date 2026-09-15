import { useCallback, useLayoutEffect, useRef, useState } from "react";

type UsePaginationScrollEffectProps = {
  hasPaginationChanged: () => boolean;
  resetPaginationChanged: () => void;
};

export function usePaginationScrollEffect({
  hasPaginationChanged,
  resetPaginationChanged,
}: UsePaginationScrollEffectProps) {
  const scrollToTargetRef = useRef<HTMLDivElement | null>(null);

  const [scrollRequestTick, setScrollRequestTick] = useState(0);
  const scrollRequestRef = useRef(false);

  const scrollToTarget = useCallback(() => {
    scrollRequestRef.current = true;
    setScrollRequestTick((id) => id + 1);
  }, []);

  useLayoutEffect(() => {
    // has a target to scroll to
    if (!scrollToTargetRef.current) return;

    // has a change to perform scrolling
    if (!hasPaginationChanged()) return;

    // has a scroll request
    if (!scrollRequestRef.current) return;

    resetPaginationChanged();
    scrollRequestRef.current = false;

    const rect = scrollToTargetRef.current.getBoundingClientRect();
    const targetTop = window.scrollY + rect.top - window.innerHeight / 2;
    window.scrollTo({ top: Math.max(targetTop, 0), behavior: "instant" });
  }, [
    scrollToTargetRef,
    scrollRequestRef,
    scrollRequestTick,
    hasPaginationChanged,
    resetPaginationChanged,
  ]);

  return { scrollToTargetRef, scrollToTarget };
}
