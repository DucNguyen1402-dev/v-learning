type PaginationInfoProps = {
  displayStart: number;
  displayEnd: number;
  totalItems: number;
};
export const PaginationInfo = ({
  displayStart,
  displayEnd,
  totalItems,
}: PaginationInfoProps) => (
  <p className="pagination-control-info-wrapper">
    {`Hiển thị: `}
    <span className="font-medium text-text-subtle">
      {displayStart} - {displayEnd}
    </span>
    {` of `}
    <span className="font-medium text-text-subtle">{totalItems}</span>
  </p>
);
