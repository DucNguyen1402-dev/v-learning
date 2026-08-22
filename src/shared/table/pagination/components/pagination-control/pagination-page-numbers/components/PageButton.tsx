import {
  Button,
  BUTTON_APPEARANCES,
  BUTTON_INTENTS,
  BUTTON_SIZES,
} from "@shared/ui";

type PageButtonProps = {
  page: number;
  isCurrentPage: boolean;
  onPageClick: (page: number) => void;
};
export const PageButton = ({
  page,
  isCurrentPage,
  onPageClick,
}: PageButtonProps) => {
  return (
    <Button
      key={page}
      appearance={BUTTON_APPEARANCES.OUTLINE}
      intent={BUTTON_INTENTS.SECONDARY}
      size={BUTTON_SIZES.NONE}
      selected={isCurrentPage}
      onClick={() => onPageClick(page)}
    >
      <span className="pagination-page-button">{page}</span>
    </Button>
  );
};
