import {
  type Dispatch,
  type RefObject,
  type SetStateAction,
  useEffect,
  useLayoutEffect,
} from "react";

type UseDynamicWindowEffectProps = {
  leadingPages: number[];
  trailingPages: number[];
  currentPage: number;
  stopResizeDynamicWindowRef: RefObject<boolean>;
  setDynamicWindowSize: Dispatch<SetStateAction<number>>;
  isDynamicWindowExpanded: boolean;
  currentSlide: number;
  baseWindowSize: number;
  lastSlide: number;
};
export const useDynamicWindowEffect = ({
  leadingPages,
  trailingPages,
  currentPage,
  stopResizeDynamicWindowRef,
  setDynamicWindowSize,
  isDynamicWindowExpanded,
  currentSlide,
  baseWindowSize,
  lastSlide,
}: UseDynamicWindowEffectProps) => {
  useLayoutEffect(() => {
    if (
      leadingPages.includes(currentPage) ||
      trailingPages.includes(currentPage)
    ) {
      stopResizeDynamicWindowRef.current = false;
      setDynamicWindowSize(1);
    }
  }, [
    currentPage,
    leadingPages,
    trailingPages,
    setDynamicWindowSize,
    stopResizeDynamicWindowRef,
  ]);

  useLayoutEffect(() => {
    if (currentSlide > 1 && currentSlide < lastSlide) {
      setDynamicWindowSize(baseWindowSize);
    }
  }, [baseWindowSize, currentSlide, lastSlide, setDynamicWindowSize]);

  useEffect(() => {
    if (isDynamicWindowExpanded) {
      setDynamicWindowSize((prev) => prev - 1);
      stopResizeDynamicWindowRef.current = true;
    }
  }, [
    isDynamicWindowExpanded,
    setDynamicWindowSize,
    stopResizeDynamicWindowRef,
  ]);
};
