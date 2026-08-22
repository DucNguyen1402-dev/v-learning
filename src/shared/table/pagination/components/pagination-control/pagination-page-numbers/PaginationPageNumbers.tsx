import { CollapsedPageButtons, SimplePageButtons } from "./components";

type PaginationPageNumbersProps = {
  pageNumbers: number[];
  currentPage: number;
  onPageClick: (page: number) => void;
  isLoading?: boolean;
};

export const PaginationPageNumbers = ({
  currentPage,
  onPageClick,
  pageNumbers,
  isLoading,
}: PaginationPageNumbersProps) => {
  if (pageNumbers.length <= 5) {
    return (
      <SimplePageButtons
        pageNumbers={pageNumbers}
        currentPage={currentPage}
        onPageClick={onPageClick}
        isLoading={isLoading}
      />
    );
  }

  return (
    <CollapsedPageButtons
      pageNumbers={pageNumbers}
      currentPage={currentPage}
      onPageClick={onPageClick}
      isLoading={isLoading}
    />
  );
};
