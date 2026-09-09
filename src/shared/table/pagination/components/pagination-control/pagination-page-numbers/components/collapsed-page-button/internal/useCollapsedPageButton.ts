import { useCallback } from "react";

import { edgeCountConfig } from "./helpers";
import { useCollapsedPageButtonDerived } from "./useCollapsedPageButtonDerived";
import { useCollapsedPageButtonEffect } from "./useCollapsedPageButtonEffect";
import { useWindowedList } from "./useWindowedList";
import { useWindowListDerived } from "./useWindowListDerived";

type UseCollapsedPageButtonsProps = {
  pageNumbers: number[];
  currentPage: number;
  dynamicWindowSize: number;
  setDynamicWindowSize: React.Dispatch<React.SetStateAction<number>>;
  stopResizeRef: React.RefObject<boolean>;
};
export const useCollapsedPageButtons = ({
  pageNumbers,
  currentPage,
  dynamicWindowSize,
  setDynamicWindowSize,
  stopResizeRef,
}: UseCollapsedPageButtonsProps) => {
  const edgeConfig = edgeCountConfig(window.innerWidth);
  const { leadingPages, middlePages, trailingPages } =
    useCollapsedPageButtonDerived({
      pageNumbers,
      edgeConfig,
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
    windowSize: dynamicWindowSize,
    baseWindowSize: edgeConfig.windowSize,
  });
  const handleResizeWindow = useCallback(() => {
    if (dynamicWindowSize > edgeConfig.windowSize) {
      setDynamicWindowSize((prev) => prev - 1);
      stopResizeRef.current = true;
    }
    if (stopResizeRef.current) return;
    setDynamicWindowSize((prev) => prev + 1);
  }, [
    dynamicWindowSize,
    edgeConfig.windowSize,
    stopResizeRef,
    setDynamicWindowSize,
  ]);

  useCollapsedPageButtonEffect({
    leadingPages,
    trailingPages,
    currentPage,
    scrollToSlide,
    setSlideTo,
    lastSlide,
  });

  const {
    showLeadingEllipsis,
    showTrailingEllipsis,
    shouldShowWindow,
    skeletonCount,
    shouldShowNextWindowSlideItem,
    shouldShowPrevWindowSlideItem,
  } = useWindowListDerived({
    middlePages,
    currentSlide,
    currentPage,
    lastSlide,
    leadingPages,
    trailingPages,
    windowSize: dynamicWindowSize,
  });

  return {
    leadingPages,
    trailingPages,
    windowSlideList,
    nextWindowSlideItem,
    prevWindowSlideItem,
    showLeadingEllipsis,
    showTrailingEllipsis,
    shouldShowWindow,
    skeletonCount,
    shouldShowNextWindowSlideItem,
    shouldShowPrevWindowSlideItem,
    handleResizeWindow,
  };
};
