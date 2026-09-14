import {
  type RefObject,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

type UsePaginationScrollEffectProps = {
  clearPageJustReset: () => void;
  hasPaginationChanged: RefObject<boolean>;
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

  const [scrollEnabled, setScrollEnabled] = useState(false);

  const scrollToTarget = useCallback(() => {
    setScrollEnabled(true);
  }, []);

  useLayoutEffect(() => {
    if (!scrollEnabled || !hasPaginationChanged.current) return;

    resetPaginationChanged();

    if (!scrollToTargetRef.current) {
      return;
    }
    setScrollEnabled(false);

    if (getHasJustResetPage()) {
      clearPageJustReset();
      return;
    }

    const rect = scrollToTargetRef.current.getBoundingClientRect();
    const targetTop = window.scrollY + rect.top - window.innerHeight / 2;
    window.scrollTo({ top: targetTop, behavior: "instant" });
  }, [
    getHasJustResetPage,
    scrollToTargetRef,
    scrollEnabled,
    hasPaginationChanged,
    resetPaginationChanged,
    clearPageJustReset,
  ]);

  return { scrollToTargetRef, scrollToTarget };
}
