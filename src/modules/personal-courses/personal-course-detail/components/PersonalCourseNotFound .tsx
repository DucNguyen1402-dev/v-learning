import { Navigation } from "@shared/navigation";
import { EmptyState } from "@shared/ui";
export const PersonalCourseNotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center rounded-container border border-border-subtle bg-bg-default">
      <EmptyState
        title="Khóa học không khả dụng"
        description="Bạn chưa đăng ký khóa học này hoặc chi tiết khóa học không khả dụng."

        action={
          <Navigation.components.Back className="button-primary solid button-base px-4 py-2 text-sm">
            Quay lại
          </Navigation.components.Back>
        }
      />
    </div>
  );
};
