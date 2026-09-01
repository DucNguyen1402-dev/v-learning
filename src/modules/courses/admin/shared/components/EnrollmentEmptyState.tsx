import { TableEmptyState } from "@shared/table";

type EnrollmentEmptyStateProps = {
  title: string;
  subtitle: string;
  colSpan: number;
};
export const EnrollmentEmptyState = ({
  title,
  subtitle,
  colSpan,
}: EnrollmentEmptyStateProps) => (
  <TableEmptyState title={title} description={subtitle} colSpan={colSpan} />
);
