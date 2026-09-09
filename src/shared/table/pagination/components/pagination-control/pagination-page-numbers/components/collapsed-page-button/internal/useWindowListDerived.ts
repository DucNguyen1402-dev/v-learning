import { useMemo } from "react";
export const useWindowListDerived = ({
  currentSlide,
  currentPage,
  lastSlide,
  leadingPages,
  trailingPages,
  middlePages,
  windowSize,
}: {
  currentSlide: number;
  currentPage: number;
  lastSlide: number;
  leadingPages: number[];
  trailingPages: number[];
  middlePages: number[];
  windowSize: number;
}) => {
  const showLeadingEllipsis = currentSlide > 1;
  const showTrailingEllipsis = currentSlide < lastSlide;

  const shouldShowWindow =
    currentPage >= leadingPages.at(-1)! && currentPage <= trailingPages[0]!;
  const skeletonCount = shouldShowWindow ? 10 : 7;

  const shouldShowNextWindowSlideItem = useMemo(() => {
    const index = middlePages.indexOf(currentPage);
    if (currentPage + 1 === trailingPages[0]!) return false;
    if (index === -1 || windowSize !== 3) return false;

    return (index + 1) % windowSize === 0;
  }, [currentPage, middlePages, trailingPages, windowSize]);

  const shouldShowPrevWindowSlideItem = useMemo(() => {
    const index = middlePages.indexOf(currentPage);
    if (currentPage - 1 === leadingPages.at(-1)!) return false;
    if (index === -1 || windowSize !== 3) return false;

    return index % windowSize === 0;
  }, [currentPage, middlePages, leadingPages, windowSize]);

  return {
    showLeadingEllipsis,
    showTrailingEllipsis,
    shouldShowWindow,
    skeletonCount,
    shouldShowNextWindowSlideItem,
    shouldShowPrevWindowSlideItem,
  };
};
