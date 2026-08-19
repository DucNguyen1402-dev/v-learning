import { Pagination } from "@shared/table";
import { Button, BUTTON_SIZES } from "@shared/ui";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const PaginationControlButton = () => {
  const pagination = Pagination.use();

  return (
    <>
      {!pagination.state.isPrevDisabled && (
        <div className="avatar-button-pagination-control avatar-button-pagination-control-left">
          <Button
            disabled={pagination.state.isPrevDisabled}
            onClick={pagination.actions.onPrevClick}
            size={BUTTON_SIZES.NONE}
          >
            <ChevronLeft className="size-12 text-text-subtle" />
          </Button>
        </div>
      )}
      {!pagination.state.isNextDisabled && (
        <div className="avatar-button-pagination-control avatar-button-pagination-control-right">
          <Button
            disabled={pagination.state.isNextDisabled}
            onClick={pagination.actions.onNextClick}
            size={BUTTON_SIZES.NONE}
          >
            <ChevronRight className="size-12 text-text-subtle" />
          </Button>
        </div>
      )}
    </>
  );
};
