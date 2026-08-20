import { PaginationNumberButton } from "./PaginationNumberButton";
import { usePagination } from "./usePagination";
type PaginationPageNumbersProps = {
  pageNumbers: number[];
  currentPage: number;
  onPageClick: (page: number) => void;
};

export const PaginationPageNumbers = ({
  currentPage,
  onPageClick,
  pageNumbers,
}: PaginationPageNumbersProps) => {
  const firstThree = pageNumbers.slice(0, 3);
  const middle = pageNumbers.slice(3, -3);
  const lastThree = pageNumbers.slice(-3);

  const {
    paginatedItems,
    currentPage: paginatedCurrentPage,
    totalPages,
    onPrevClick,
    onNextClick,
    onPageClick: onPaginatedPageClick,
  } = usePagination({ items: pageNumbers, page: 2, pageSize: 3 });

  return (
    <div className="flex gap-2">
      {firstThree.map((page) => {
        const isCurrentPage = page === currentPage;

        return (
          <PaginationNumberButton
            key={page}
            page={page}
            isCurrentPage={isCurrentPage}
            onPageClick={onPageClick}
          />
        );
      })}

      <span className="pagination-ellipsis mb-1 self-end">...</span>
      {paginatedItems.map((page) => {
        const isCurrentPage = page === currentPage;

        return (
          <PaginationNumberButton
            key={page}
            page={page}
            isCurrentPage={isCurrentPage}
            onPageClick={onPageClick}
          />
        );
      })}

      <span className="pagination-ellipsis mb-1 self-end">...</span>
      {lastThree.map((page) => {
        const isCurrentPage = page === currentPage;

        return (
          <PaginationNumberButton
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
