import { ChevronLeft, ChevronRight } from "lucide-react";

import { PaginationPageNumbers } from "./pagination-page-numbers";
import { PaginationButtonControl } from "./PaginationButtonControl";

type PaginationControlProps = {
  state: {
    currentPage: number;
    pageNumbers: number[];
    isPrevDisabled: boolean;
    isNextDisabled: boolean;
  };
  actions: {
    onPrevClick: () => void;
    onNextClick: () => void;
    onPageClick: (page: number) => void;
  };
  status?: {
    isLoading?: boolean;
  };
};

export const PaginationControl = ({
  state: { currentPage, pageNumbers, isPrevDisabled, isNextDisabled },
  actions: { onPrevClick, onNextClick, onPageClick },
  status,
}: PaginationControlProps) => {
  return (
    <div className="pagination-control-container">
      <PaginationButtonControl
        onClick={onPrevClick}
        disabled={isPrevDisabled}
        icon={ChevronLeft}
        isLoading={status?.isLoading}
      />
      <PaginationPageNumbers
        currentPage={currentPage}
        pageNumbers={pageNumbers}
        onPageClick={onPageClick}
        isLoading={status?.isLoading}
      />
      <PaginationButtonControl
        onClick={onNextClick}
        disabled={isNextDisabled}
        icon={ChevronRight}
        isLoading={status?.isLoading}
      />
    </div>
  );
};
