import { EmptyState } from "@shared/ui";
import { Button, BUTTON_APPEARANCES, BUTTON_INTENTS } from "@shared/ui";
import { SearchX } from "lucide-react";

type TableEmptyStateProps = {
  colSpan: number;
  title: string;
  description?: string;
  actionHandler?: () => void;
};
export const TableEmptyState = ({
  colSpan,
  title,
  description,
  actionHandler,
}: TableEmptyStateProps) => (
  <tr>
    <td colSpan={colSpan}>
      <EmptyState
        title={title}
        description={description}
        icon={SearchX}
        action={
          <Button
            intent={BUTTON_INTENTS.PRIMARY}
            appearance={BUTTON_APPEARANCES.SOLID}
            onClick={actionHandler}
          >
            Xóa bộ lọc
          </Button>
        }
      />
    </td>
  </tr>
);
