import {
  type Dispatch,
  type RefObject,
  type SetStateAction,
  useEffect,
} from "react";

type UseDynamicWindowEffectProps = {
  middlePages: number[];
  currentPage: number;
  stopResizeDynamicWindowRef: RefObject<boolean>;
  setDynamicWindowSize: Dispatch<SetStateAction<number>>;
  isDynamicWindowExpanded: boolean;
};
export const useDynamicWindowEffect = ({
  middlePages,
  currentPage,
  stopResizeDynamicWindowRef,
  setDynamicWindowSize,
  isDynamicWindowExpanded,
}: UseDynamicWindowEffectProps) => {
  useEffect(() => {
    if (!middlePages.includes(currentPage)) {
      stopResizeDynamicWindowRef.current = false;
      setDynamicWindowSize(1);
    }
  }, [
    currentPage,
    middlePages,
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
