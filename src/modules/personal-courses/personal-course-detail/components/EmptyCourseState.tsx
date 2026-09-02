import { CourseNotFoundIcon, EmptyState } from "@shared/ui";

export const EmptyCourseState = () => {
  return (
    <div className="min-h-screen pt-8 md:px-4">
      <div className="flex flex-col items-center gap-4 rounded-container border border-border-subtle bg-bg-default shadow-surface">
        <EmptyState
          title="Khóa học không tồn tại"
          icon={CourseNotFoundIcon}
          description="Không có nội dung khóa học."
        />
      </div>
    </div>
  );
};
