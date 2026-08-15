type PaginationInfoProps = {
  displayStart: number;
  displayEnd: number;
  totalItems: number;
  label: string;
};
export const PaginationInfo = ({
  displayStart,
  displayEnd,
  totalItems,
  label,
}: PaginationInfoProps) => (
  <p className="pagination-control-info-wrapper">
    {`Hiển thị `}
    <span className="font-medium">
      {displayStart}-{displayEnd}
    </span>
    {` / `}
    <span className="font-medium">{totalItems}</span>
    {` ${label}`}
  </p>
);
