import { usePaginationContext } from "@shared/table/pagination/contexts";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { PaginationButtonControl } from "./PaginationButtonControl";
import { PaginationInfo } from "./PaginationInfo";
import { PaginationPageNumbers } from "./PaginationPageNumbers";

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
      entityName,
    },
    actions: { onPrevClick, onNextClick, onPageClick },
  } = usePaginationContext();
  return (
    <div className="pagination-control-container">
      <PaginationInfo
        displayStart={displayStart}
        displayEnd={displayEnd}
        totalItems={totalItems}
        label={entityName}
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
