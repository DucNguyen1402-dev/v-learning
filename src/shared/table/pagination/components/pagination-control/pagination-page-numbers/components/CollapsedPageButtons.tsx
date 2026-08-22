import { useEffect, useMemo } from "react";

import { TinyButtonSkeleton } from "@shared/ui";
import { createArray } from "@shared/utils";

import { useWindowedList } from "../hooks";
import { PageButton } from "./PageButton";
import { PaginationEllipsis } from "./PaginationEllipsis";
type CollapsedPageButtonsProps = {
  pageNumbers: number[];
  currentPage: number;
  onPageClick: (page: number) => void;
  isLoading?: boolean;
};

const edgeCount = [
  { breakpoint: 768, count: 1, windowSize: 2 },
  { breakpoint: 1024, count: 3, windowSize: 3 },
];

const getEdgeCount = (width: number) => {
  const edge = edgeCount.find((edge) => width < edge.breakpoint);
  return edge
    ? { count: edge.count, windowSize: edge.windowSize }
    : { count: 3, windowSize: 3 };
};

export const CollapsedPageButtons = ({
  currentPage,
  onPageClick,
  pageNumbers,
  isLoading,
}: CollapsedPageButtonsProps) => {
  const edgeCount = getEdgeCount(window.innerWidth);

  const leadingPages = useMemo(
    () => pageNumbers.slice(0, edgeCount.count),
    [pageNumbers, edgeCount.count],
  );
  const middlePages = useMemo(
    () => pageNumbers.slice(edgeCount.count, -edgeCount.count),
    [pageNumbers, edgeCount.count],
  );
  const trailingPages = useMemo(
    () => pageNumbers.slice(-edgeCount.count),
    [pageNumbers, edgeCount.count],
  );

  const { windowSlideList, currentSlide, lastSlide, scrollToItem, setSlideTo } =
    useWindowedList({
      items: middlePages,
      windowSize: edgeCount.windowSize,
    });

  useEffect(() => {
    if (leadingPages.includes(currentPage)) {
      setSlideTo(1);
      return;
    }

    if (trailingPages.includes(currentPage)) {
      setSlideTo(lastSlide);
      return;
    }
    scrollToItem(currentPage);
  }, [
    currentPage,
    leadingPages,
    lastSlide,
    trailingPages,
    scrollToItem,
    setSlideTo,
  ]);

  const showLeadingEllipsis = currentSlide > 1;
  const showTrailingEllipsis = currentSlide < lastSlide;

  const shouldShowWindow =
    currentPage >= leadingPages.at(-1)! && currentPage <= trailingPages[0]!;

  const skeletonCount = shouldShowWindow ? 10 : 7;
  return isLoading ? (
    createArray(skeletonCount).map((_, index) => (
      <TinyButtonSkeleton key={index} />
    ))
  ) : (
    <div className="pagination-page-number-container">
      {leadingPages.map((page) => {
        const isCurrentPage = page === currentPage;

        return (
          <PageButton
            key={page}
            page={page}
            isCurrentPage={isCurrentPage}
            onPageClick={onPageClick}
          />
        );
      })}

      {showLeadingEllipsis && <PaginationEllipsis />}
      {shouldShowWindow &&
        windowSlideList.map((page) => {
          const isCurrentPage = page === currentPage;

          return (
            <PageButton
              key={page}
              page={page}
              isCurrentPage={isCurrentPage}
              onPageClick={onPageClick}
            />
          );
        })}

      {showTrailingEllipsis && <PaginationEllipsis />}
      {trailingPages.map((page) => {
        const isCurrentPage = page === currentPage;

        return (
          <PageButton
            key={page}
            page={page}
            isCurrentPage={isCurrentPage}
            onPageClick={onPageClick}
          />
        );
      })}
    </div>
  );
};
