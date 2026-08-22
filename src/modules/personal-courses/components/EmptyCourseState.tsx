import { Navigation } from "@shared/navigation";
import { EmptyState } from "@shared/ui";
import { GraduationCap } from "lucide-react";

export const EmptyCourseState = () => {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col justify-center gap-4 rounded-container border border-border-subtle">
        <EmptyState
          title="Bạn chưa ghi danh khóa học nào."
          description="Hãy khám phá các khóa học để bắt đầu hành trình học tập của bạn."
          action={
            <Navigation.components.Go
              routeKey={Navigation.client.keys.COURSES}
              className="button-primary solid button-base px-4 py-2 text-sm"
            >
              Khám phá khóa học
            </Navigation.components.Go>
          }

          icon={GraduationCap}
        />
      </div>
    </div>
  );
};
