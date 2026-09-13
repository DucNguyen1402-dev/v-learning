import { useCallback, useRef, useState } from "react";

import {
  useDynamicWindowEffect,
  useWindowList,
  useWindowListDerived,
  useWindowListEffect,
} from "./internal";
type UseCollapsedPageButtonsProps = {
  leadingPages: number[];
  trailingPages: number[];
  middlePages: number[];
  baseWindowSize: number;
  edgeCount: number;
  currentPage: number;
};
export const useCollapsedPageButtons = ({
  leadingPages,
  trailingPages,
  middlePages,
  baseWindowSize,
  edgeCount,
  currentPage,
}: UseCollapsedPageButtonsProps) => {
  const stopResizeDynamicWindowRef = useRef(false);
  const [dynamicWindowSize, setDynamicWindowSize] = useState(1);
  const isDynamicWindowExpanded = dynamicWindowSize > baseWindowSize;
  const handleResizeDynamicWindow = useCallback(() => {
    if (stopResizeDynamicWindowRef.current) return;

    setDynamicWindowSize((prev) => prev + 1);
  }, [stopResizeDynamicWindowRef, setDynamicWindowSize]);

  const {
    windowSlideList,
    currentSlide,
    lastSlide,
    scrollToSlide,
    prevWindowSlideItem,
    setSlideTo,
    nextWindowSlideItem,
  } = useWindowList({
    items: middlePages,
    dynamicWindowSize,
    isDynamicWindowExpanded,
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
    skeletonCount,
  } = useWindowListDerived({
    middlePages,
    currentSlide,
    currentPage,
    lastSlide,
    leadingPages,
    trailingPages,
    dynamicWindowSize,
    baseWindowSize,
    edgeCount,
  });

  useDynamicWindowEffect({
    leadingPages,
    trailingPages,
    currentPage,
    stopResizeDynamicWindowRef,
    setDynamicWindowSize,
    isDynamicWindowExpanded,
  });

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
