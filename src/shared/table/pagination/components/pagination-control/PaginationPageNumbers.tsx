import {
  Button,
  BUTTON_APPEARANCES,
  BUTTON_INTENTS,
  BUTTON_SIZES,
} from "@shared/ui";

type PaginationPageNumbersProps = {
  pageNumbers: readonly number[];
  currentPage: number;
  onPageClick: (page: number) => void;
};

export const PaginationPageNumbers = ({
  pageNumbers,
  currentPage,
  onPageClick,
}: PaginationPageNumbersProps) => {
  return (
    <>
      {pageNumbers.map((page) => {
        const isCurrentPage = page === currentPage;

        return (
          <Button
            key={page}
            appearance={BUTTON_APPEARANCES.OUTLINE}
            intent={BUTTON_INTENTS.SECONDARY}
            size={BUTTON_SIZES.MEDIUM}
            selected={isCurrentPage}
            onClick={() => onPageClick(page)}
          >
            {page}
          </Button>
        );
      })}
    </>
  );
};
