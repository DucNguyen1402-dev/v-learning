import { usePaginationContext } from "@shared/table/pagination/contexts";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { usePagination } from "./hooks";
import { PaginationPageNumbers } from "./pagination-page-numbers";
import { PaginationButtonControl } from "./PaginationButtonControl";
import { PaginationInfo } from "./PaginationInfo";
export const PaginationControl = () => {
  const {
    state: {
      currentPage,
      pageNumbers,
      displayStart,
      displayEnd,
      totalItems,
      isPrevDisabled,
      isNextDisabled,
    },
    actions: { onPrevClick, onNextClick, onPageClick },
  } = usePaginationContext();

  const {
    // paginatedItems,
    onPrevClick: onLocalPrevClick,
    onNextClick: onLocalNextClick,
    currentLocalPageSize,
  } = usePagination({ items: pageNumbers, pageSize: 8 });

  return (
    <div className="pagination-control-container">
      <PaginationInfo
        displayStart={displayStart}
        displayEnd={displayEnd}
        totalItems={totalItems}
      />
      <div className="pagination-control-action-container">
        <PaginationButtonControl
          onClick={() => {
            onPrevClick();
            if (currentPage % currentLocalPageSize === 0) {
              onLocalPrevClick();
            }
          }}
          disabled={isPrevDisabled}
          icon={ChevronLeft}
        />
        <PaginationPageNumbers
          currentPage={currentPage}
          pageNumbers={pageNumbers}
          onPageClick={onPageClick}
        />
        <PaginationButtonControl
          onClick={() => {
            onNextClick();
            if (currentPage % currentLocalPageSize === 0) {
              onLocalNextClick();
            }
          }}
          disabled={isNextDisabled}
          icon={ChevronRight}
        />
      </div>
    </div>
  );
};
