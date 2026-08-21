import { usePaginationContext } from "@shared/table/pagination/contexts";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

  return (
    <div className="pagination-control-container">
      <PaginationInfo
        displayStart={displayStart}
        displayEnd={displayEnd}
        totalItems={totalItems}
      />
      <div className="pagination-control-action-container">
        <PaginationButtonControl
          onClick={onPrevClick}
          disabled={isPrevDisabled}
          icon={ChevronLeft}
        />
        <PaginationPageNumbers
          currentPage={currentPage}
          pageNumbers={pageNumbers}
          onPageClick={onPageClick}
        />
        <PaginationButtonControl
          onClick={onNextClick}
          disabled={isNextDisabled}
          icon={ChevronRight}
        />
      </div>
    </div>
  );
};
