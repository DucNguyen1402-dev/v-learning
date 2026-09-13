import {
  type Dispatch,
  type RefObject,
  type SetStateAction,
  useEffect,
} from "react";

type UseDynamicWindowEffectProps = {
  leadingPages: number[];
  trailingPages: number[];
  currentPage: number;
  stopResizeDynamicWindowRef: RefObject<boolean>;
  setDynamicWindowSize: Dispatch<SetStateAction<number>>;
  isDynamicWindowExpanded: boolean;
};
export const useDynamicWindowEffect = ({
  leadingPages,
  trailingPages,
  currentPage,
  stopResizeDynamicWindowRef,
  setDynamicWindowSize,
  isDynamicWindowExpanded,
}: UseDynamicWindowEffectProps) => {
  useEffect(() => {
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
