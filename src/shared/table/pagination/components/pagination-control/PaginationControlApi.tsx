import { ChevronLeft, ChevronRight } from "lucide-react";

import { PaginationPageNumbers } from "./pagination-page-numbers";
import { PaginationButtonControl } from "./PaginationButtonControl";
import { PaginationInfo } from "./PaginationInfo";

type PaginationControlProps = {
  state: {
    currentPage: number;
    pageNumbers: number[];
    displayStart: number;
    displayEnd: number;
    totalPages: number;
    isPrevDisabled: boolean;
    isNextDisabled: boolean;
  };
  actions: {
    onPrevClick: () => void;
    onNextClick: () => void;
    onPageClick: (page: number) => void;
  };
};

export const PaginationControlApi = ({
  state: {
    currentPage,
    pageNumbers,
    displayStart,
    displayEnd,
    totalPages,
    isPrevDisabled,
    isNextDisabled,
  },
  actions: { onPrevClick, onNextClick, onPageClick },
}: PaginationControlProps) => {
  return (
    <div className="pagination-control-container">
      <PaginationInfo
        displayStart={displayStart}
        displayEnd={displayEnd}
        totalItems={totalPages}
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
