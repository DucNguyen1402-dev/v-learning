import { EmptyState } from "@shared/ui";
import { Button, BUTTON_APPEARANCES, BUTTON_INTENTS } from "@shared/ui";
import { SearchX } from "lucide-react";

type EmptyCoursesStateProps = {
  tenKhoaHoc: string;
  onClearFilter: () => void;
};
export const EmptyCoursesState = ({
  tenKhoaHoc,
  onClearFilter,
}: EmptyCoursesStateProps) => {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col justify-center gap-4 rounded-container border border-border-subtle">
        <EmptyState
          title="Không tìm thấy khóa học"
          description={`Không tìm thấy khóa học phù hợp với "${tenKhoaHoc}". Hãy thử tìm kiếm với từ khóa khác.`}
          action={
            <Button
              intent={BUTTON_INTENTS.PRIMARY}
              appearance={BUTTON_APPEARANCES.SOLID}
              onClick={onClearFilter}
            >
              Xóa bộ lọc
            </Button>
          }

          icon={SearchX}
        />
      </div>
    </div>
  );
};
