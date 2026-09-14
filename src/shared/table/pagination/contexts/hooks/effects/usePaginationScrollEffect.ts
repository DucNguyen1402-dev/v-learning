import {
  type RefObject,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

type UsePaginationScrollEffectProps = {
  hasJustResetPageRef: RefObject<boolean>;
};

export function usePaginationScrollEffect({
  hasJustResetPageRef,
}: UsePaginationScrollEffectProps) {
  const scrollToTargetRef = useRef<HTMLDivElement | null>(null);

  const [scrollEnabled, setScrollEnabled] = useState(false);

  const setScrollToTarget = useCallback(() => {
    setScrollEnabled(true);
  }, []);

  useLayoutEffect(() => {
    if (!scrollToTargetRef.current || !scrollEnabled) {
      return;
    }
    setScrollEnabled(false);

    if (hasJustResetPageRef.current) {
      hasJustResetPageRef.current = false;
      return;
    }

    const rect = scrollToTargetRef.current.getBoundingClientRect();
    const targetTop = window.scrollY + rect.top - window.innerHeight / 2;
    window.scrollTo({ top: targetTop, behavior: "instant" });
  }, [hasJustResetPageRef, scrollToTargetRef, scrollEnabled]);

  return { scrollToTargetRef, setScrollToTarget };
}
