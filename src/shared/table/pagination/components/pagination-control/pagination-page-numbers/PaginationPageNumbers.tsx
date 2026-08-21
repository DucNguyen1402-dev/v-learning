import { CollapsedPageButtons, SimplePageButtons } from "./components";

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
  if (pageNumbers.length <= 5) {
    return (
      <SimplePageButtons
        pageNumbers={pageNumbers}
        currentPage={currentPage}
        onPageClick={onPageClick}
      />
    );
  }

  return (
    <CollapsedPageButtons
      pageNumbers={pageNumbers}
      currentPage={currentPage}
      onPageClick={onPageClick}
    />
  );
};
