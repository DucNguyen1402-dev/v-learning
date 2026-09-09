import { TinyButtonSkeleton } from "@shared/ui";
import { createArray } from "@shared/utils";

import { PageButton } from "../shared";
import { useCollapsedPageButtons } from "./internal";
import { PaginationEllipsis } from "./PaginationEllipsis";
type CollapsedPageButtonsProps = {
  pageNumbers: number[];
  currentPage: number;
  onPageClick: (page: number) => void;
  isLoading?: boolean;
  dynamicWindowSize: number;
  setDynamicWindowSize: React.Dispatch<React.SetStateAction<number>>;
  stopResizeRef: React.RefObject<boolean>;
};

export const CollapsedPageButtons = ({
  currentPage,
  onPageClick,
  pageNumbers,
  isLoading,
  dynamicWindowSize,
  setDynamicWindowSize,
  stopResizeRef,
}: CollapsedPageButtonsProps) => {
  const {
    leadingPages,
    trailingPages,
    windowSlideList,
    showLeadingEllipsis,
    showTrailingEllipsis,
    shouldShowWindow,
    skeletonCount,
    handleResizeWindow,
  } = useCollapsedPageButtons({
    pageNumbers,
    currentPage,
    dynamicWindowSize,
    setDynamicWindowSize,
    stopResizeRef,
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

      {showLeadingEllipsis && <PaginationEllipsis />}
      {shouldShowWindow &&
        windowSlideList.map((page) => {
          const isCurrentPage = page === currentPage;

          return (
            <PageButton
              key={page}
              page={page}
              isCurrentPage={isCurrentPage}
              onPageClick={(page) => {
                handleResizeWindow();
                onPageClick(page);
              }}
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
