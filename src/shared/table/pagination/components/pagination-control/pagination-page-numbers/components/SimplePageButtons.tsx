import { PageButton } from "./PageButton";

type SimplePageButtonsProps = {
  pageNumbers: number[];
  currentPage: number;
  onPageClick: (page: number) => void;
};
export const SimplePageButtons = ({
  currentPage,
  onPageClick,
  pageNumbers,
}: SimplePageButtonsProps) => {
  return (
    <div className="flex gap-2">
      {pageNumbers.map((page) => {
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
