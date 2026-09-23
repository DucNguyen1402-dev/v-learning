import { Navigation } from "@shared/navigation";
import { EmptyState } from "@shared/ui";
import { GraduationCap, Inbox } from "lucide-react";

export const EmptyCourseState = () => {
  return (
    <div className="flex flex-col justify-center gap-4 rounded-container border border-border-subtle bg-bg-default">
      <EmptyState
        title="Bạn chưa ghi danh khóa học nào."
        description="Hãy khám phá các khóa học để bắt đầu hành trình học tập của bạn."
        action={
          <Navigation.components.Go
            routeKey={Navigation.client.keys.COURSES}
            className="button-primary solid button-base px-3 py-1.5 text-xs md:px-4 md:py-2 md:text-sm"
          >
            <GraduationCap className="mr-1 size-5 md:size-6" />
            Khám phá khóa học
          </Navigation.components.Go>
        }

        icon={Inbox}
      />
    </div>
  );
};
