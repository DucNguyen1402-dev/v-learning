import { TinyButtonSkeleton } from "@shared/ui";
import { createArray } from "@shared/utils";

import { PageButton } from "./PageButton";

type SimplePageButtonsProps = {
  pageNumbers: number[];
  currentPage: number;
  onPageClick: (page: number) => void;
  isLoading?: boolean;
};
export const SimplePageButtons = ({
  currentPage,
  onPageClick,
  pageNumbers,
  isLoading,
}: SimplePageButtonsProps) => {
  return (
    <div className="pagination-page-number-container">
      {isLoading
        ? createArray(5).map((_, index) => <TinyButtonSkeleton key={index} />)
        : pageNumbers.map((page) => {
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
