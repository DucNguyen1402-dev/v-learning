import { useRef } from "react";

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
  const lastPageNumbersRef = useRef<number[]>(pageNumbers);

  if (pageNumbers.length > 0) {
    // eslint-disable-next-line react-hooks/refs
    lastPageNumbersRef.current = pageNumbers;
  }
  const stablePageNumbers =
    isLoading && pageNumbers.length === 0
      ? // eslint-disable-next-line react-hooks/refs
        lastPageNumbersRef.current
      : pageNumbers;

  const isCollapsed = stablePageNumbers.length > 5;
  const isEmpty = stablePageNumbers.length === 0;

  if (isEmpty) {
    return null;
  }

  if (isCollapsed) {
    return (
      <CollapsedPageButtons
        pageNumbers={stablePageNumbers}
        currentPage={currentPage}
        onPageClick={onPageClick}
        isLoading={isLoading}
      />
    );
  }

  return (
    <SimplePageButtons
      pageNumbers={stablePageNumbers}
      currentPage={currentPage}
      onPageClick={onPageClick}
      isLoading={isLoading}
    />
  );
};
