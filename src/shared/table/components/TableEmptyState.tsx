import { EmptyState } from "@shared/ui";
import { SearchX } from "lucide-react";

type TableEmptyStateProps = {
  colSpan: number;
  title: string;
  description?: string;
};
export const TableEmptyState = ({
  colSpan,
  title,
  description,
}: TableEmptyStateProps) => (
  <tr>
    <td colSpan={colSpan}>
      <EmptyState title={title} description={description} icon={SearchX} />
    </td>
  </tr>
);
