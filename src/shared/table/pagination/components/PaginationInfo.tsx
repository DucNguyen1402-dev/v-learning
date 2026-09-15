import { Skeleton, SKELETON_HEIGHTS, SKELETON_WIDTHS } from "@shared/ui";

type PaginationInfoProps = {
  displayStart: number;
  displayEnd: number;
  totalItems: number;
  isLoading?: boolean;
};

export const PaginationInfo = ({
  displayStart,
  displayEnd,
  totalItems,
  isLoading = false,
}: PaginationInfoProps) => {
  if (isLoading) {
    return (
      <div className="pagination-control-info-wrapper">
        <Skeleton height={SKELETON_HEIGHTS.LG} width={SKELETON_WIDTHS.MD} />
      </div>
    );
  }

  return (
    <p className="pagination-control-info-wrapper">
      {`Hiển thị: `}
      <span className="font-medium text-text-subtle">
        {displayStart} - {displayEnd}
      </span>
      {` of `}
      <span className="font-medium text-text-subtle">{totalItems}</span>
    </p>
  );
};
