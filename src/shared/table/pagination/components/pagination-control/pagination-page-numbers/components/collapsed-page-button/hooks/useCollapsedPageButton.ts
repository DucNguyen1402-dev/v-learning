import { useCallback } from "react";

import { edgeCountConfig } from "./helpers";
import {
  useDynamicWindowEffect,
  usePageNumberGroups,
  useWindowedList,
  useWindowListDerived,
  useWindowListEffect,
} from "./internal";

type UseCollapsedPageButtonsProps = {
  pageNumbers: number[];
  currentPage: number;
  dynamicWindowSize: number;
  setDynamicWindowSize: React.Dispatch<React.SetStateAction<number>>;
  stopResizeDynamicWindowRef: React.RefObject<boolean>;
};
export const useCollapsedPageButtons = ({
  pageNumbers,
  currentPage,
  dynamicWindowSize,
  setDynamicWindowSize,
  stopResizeDynamicWindowRef,
}: UseCollapsedPageButtonsProps) => {
  const { count: edgeCount, windowSize: baseWindowSize } = edgeCountConfig(
    window.innerWidth,
  );

  const { leadingPages, middlePages, trailingPages } = usePageNumberGroups({
    pageNumbers,
    edgeCount,
  });

  const {
    windowSlideList,
    currentSlide,
    lastSlide,
    scrollToSlide,
    prevWindowSlideItem,
    setSlideTo,
    nextWindowSlideItem,
  } = useWindowedList({
    items: middlePages,
    dynamicWindowSize,
    baseWindowSize,
  });

  useWindowListEffect({
    leadingPages,
    trailingPages,
    currentPage,
    scrollToSlide,
    setSlideTo,
    lastSlide,
  });

  const {
    shouldShowLeadingEllipsis,
    shouldShowTrailingEllipsis,
    shouldShowWindow,
    shouldShowNextWindowSlideItem,
    shouldShowPrevWindowSlideItem,
  } = useWindowListDerived({
    middlePages,
    currentSlide,
    currentPage,
    lastSlide,
    leadingPages,
    trailingPages,
    dynamicWindowSize,
    baseWindowSize,
  });

  useDynamicWindowEffect({
    leadingPages,
    trailingPages,
    currentPage,
    stopResizeDynamicWindowRef,
    setDynamicWindowSize,
    dynamicWindowSize,
    baseWindowSize,
  });
  const handleResizeDynamicWindow = useCallback(() => {
    if (stopResizeDynamicWindowRef.current) return;
    setDynamicWindowSize((prev) => prev + 1);
  }, [stopResizeDynamicWindowRef, setDynamicWindowSize]);

  const skeletonCount = shouldShowWindow
    ? edgeCount * 2 + baseWindowSize
    : edgeCount * 2;

  return {
    leadingPages,
    trailingPages,
    windowSlideList,
    nextWindowSlideItem,
    prevWindowSlideItem,
    shouldShowLeadingEllipsis,
    shouldShowTrailingEllipsis,
    shouldShowWindow,
    shouldShowNextWindowSlideItem,
    shouldShowPrevWindowSlideItem,
    handleResizeDynamicWindow,
    skeletonCount,
  };
};
