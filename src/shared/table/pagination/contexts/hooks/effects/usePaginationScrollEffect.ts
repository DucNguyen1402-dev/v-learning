import { useCallback, useLayoutEffect, useRef, useState } from "react";
// Keep this comment as a reference for the issue-investigation workflow.
// When tracing an issue across multiple files, mark the root-cause file and key findings
// so you can return to the original context after exploring other parts of the flow.
// just Control + Shift + F to search "DEBUG TRACE" to find the root cause in the scroll flow.
// ============================================================
// DEBUG TRACE: ROOT CAUSE — SCROLL FLOW
// If scroll-to-target fails, this file contains a known
// root-cause point related to page reset.
// ============================================================

type UsePaginationScrollEffectProps = {
  hasPaginationChanged: () => boolean;
  resetPaginationChanged: () => void;
};

export function usePaginationScrollEffect({
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

    resetPaginationChanged();
    scrollRequestRef.current = false;

    const rect = scrollToTargetRef.current.getBoundingClientRect();
    const targetTop = window.scrollY + rect.top - window.innerHeight / 2;
    window.scrollTo({ top: Math.max(targetTop, 0), behavior: "instant" });
  }, [
    scrollToTargetRef,
    scrollRequestRef,
    scrollRequestId,
    hasPaginationChanged,
    resetPaginationChanged,
  ]);

  return { scrollToTargetRef, scrollToTarget };
}
