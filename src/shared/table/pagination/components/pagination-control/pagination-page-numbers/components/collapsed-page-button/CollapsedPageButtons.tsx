import { TinyButtonSkeleton } from "@shared/ui";
import { createArray } from "@shared/utils";

import { PageButton } from "../shared";
import { getEdgeCountConfig, getPageNumberGroups } from "./helpers";
import { useCollapsedPageButtons } from "./hooks";
import { PaginationEllipsis } from "./PaginationEllipsis";
type CollapsedPageButtonsProps = {
  pageNumbers: number[];
  currentPage: number;
  onPageClick: (page: number) => void;
  isLoading?: boolean;
  dynamicWindowSize: number;
  setDynamicWindowSize: React.Dispatch<React.SetStateAction<number>>;
  stopResizeDynamicWindowRef: React.RefObject<boolean>;
};

export const CollapsedPageButtons = ({
  currentPage,
  onPageClick,
  pageNumbers,
  isLoading,
  dynamicWindowSize,
  setDynamicWindowSize,
  stopResizeDynamicWindowRef,
}: CollapsedPageButtonsProps) => {
  const { count: edgeCount, windowSize: baseWindowSize } = getEdgeCountConfig(
    window.innerWidth,
  );

  const { leadingPages, middlePages, trailingPages } = getPageNumberGroups({
    pageNumbers,
    edgeCount,
  });

  const {
    windowSlideList,
    shouldShowLeadingEllipsis,
    prevWindowSlideItem,
    shouldShowTrailingEllipsis,
    shouldShowWindow,
    nextWindowSlideItem,
    skeletonCount,
    shouldShowNextWindowSlideItem,
    shouldShowPrevWindowSlideItem,
    handleResizeDynamicWindow,
  } = useCollapsedPageButtons({
    currentPage,
    dynamicWindowSize,
    setDynamicWindowSize,
    stopResizeDynamicWindowRef,
    leadingPages,
    trailingPages,
    middlePages,
    baseWindowSize,
    edgeCount,
  });

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

      {shouldShowLeadingEllipsis && <PaginationEllipsis />}
      {shouldShowPrevWindowSlideItem && (
        <PageButton
          key={prevWindowSlideItem}
          page={prevWindowSlideItem}
          isCurrentPage={prevWindowSlideItem === currentPage}
          onPageClick={(page) => {
            handleResizeDynamicWindow();
            onPageClick(page);
          }}
        />
      )}

      {shouldShowWindow &&
        windowSlideList.map((page) => {
          const isCurrentPage = page === currentPage;
          return (
            <PageButton
              key={page}
              page={page}
              isCurrentPage={isCurrentPage}
              onPageClick={(page) => {
                handleResizeDynamicWindow();
                onPageClick(page);
              }}
            />
          );
        })}

      {shouldShowNextWindowSlideItem && (
        <PageButton
          key={nextWindowSlideItem}
          page={nextWindowSlideItem}
          isCurrentPage={nextWindowSlideItem === currentPage}
          onPageClick={(page) => {
            handleResizeDynamicWindow();
            onPageClick(page);
          }}
        />
      )}

      {shouldShowTrailingEllipsis && <PaginationEllipsis />}
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
