import { useCallback, useEffect, useMemo } from "react";

import { edgeCountConfig } from "./helpers";
import { useWindowedList } from "./useWindowedList";

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

  const leadingPages = useMemo(
    () => pageNumbers.slice(0, edgeConfig.count),
    [pageNumbers, edgeConfig.count],
  );
  const middlePages = useMemo(
    () => pageNumbers.slice(edgeConfig.count, -edgeConfig.count),
    [pageNumbers, edgeConfig.count],
  );
  const trailingPages = useMemo(
    () => pageNumbers.slice(-edgeConfig.count),
    [pageNumbers, edgeConfig.count],
  );

  const { windowSlideList, currentSlide, lastSlide, scrollToItem, setSlideTo } =
    useWindowedList({
      items: middlePages,
      windowSize: dynamicWindowSize,
      baseWindowSize: edgeConfig.windowSize,
    });

  useEffect(() => {
    if (leadingPages.includes(currentPage)) {
      setSlideTo(1);
      return;
    }

    scrollToItem(currentPage);

    if (trailingPages.includes(currentPage)) {
      setSlideTo(lastSlide);
      return;
    }
  }, [
    currentPage,
    leadingPages,
    lastSlide,
    trailingPages,
    scrollToItem,
    setSlideTo,
  ]);

  const handleResizeWindow = useCallback(() => {
    if (dynamicWindowSize > edgeConfig.windowSize) {
      setDynamicWindowSize((prev) => prev - 1);
      stopResizeRef.current = true;
    }

    if (!stopResizeRef.current) {
      setDynamicWindowSize((prev) => prev + 1);
    }
  }, [
    dynamicWindowSize,
    edgeConfig.windowSize,
    stopResizeRef,
    setDynamicWindowSize,
  ]);

  useEffect(() => {
    const index = middlePages.indexOf(currentPage);
    if (index === -1 || dynamicWindowSize !== 3) return;
    const isLastItemInCurrentWindow = (index + 1) % dynamicWindowSize === 0;
    if (isLastItemInCurrentWindow) {
      stopResizeRef.current = false;
      setDynamicWindowSize((prev) => prev + 1);
    }
  }, [
    currentPage,
    middlePages,
    dynamicWindowSize,
    handleResizeWindow,
    stopResizeRef,
    setDynamicWindowSize,
  ]);

  const showLeadingEllipsis = currentSlide > 1;
  const showTrailingEllipsis = currentSlide < lastSlide;

  const shouldShowWindow =
    currentPage >= leadingPages.at(-1)! && currentPage <= trailingPages[0]!;

  const skeletonCount = shouldShowWindow ? 10 : 7;

  return {
    leadingPages,
    trailingPages,
    windowSlideList,
    showLeadingEllipsis,
    showTrailingEllipsis,
    shouldShowWindow,
    skeletonCount,
    handleResizeWindow,
  };
};
