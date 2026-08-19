import { EducationLogo, LOGO_SIZES, LOGO_VARIANTS } from "@shared/logo";
import { Navigation } from "@shared/navigation";
import {
  Button,
  BUTTON_APPEARANCES,
  BUTTON_INTENTS,
  EmptyState,
} from "@shared/ui";

export const EmptyCourseState = () => {
  const { go } = Navigation.hooks.useNavigate();

  return (
    <div className="min-h-screen">
      <div className="flex flex-col justify-center gap-4 rounded-container border border-border-subtle">
        <EmptyState
          title="Bạn chưa ghi danh khóa học nào."
          description="Hãy khám phá các khóa học để bắt đầu hành trình học tập của bạn."
          action={
            <Button
              appearance={BUTTON_APPEARANCES.SOLID}
              intent={BUTTON_INTENTS.PRIMARY}
              onClick={() =>
                go(Navigation.client.keys.COURSES, {
                  intent: "explore",
                })
              }
            >
              Khám phá khóa học
            </Button>
          }
          illustration={
            <EducationLogo
              variant={LOGO_VARIANTS.SECONDARY}
              size={LOGO_SIZES.XLARGE}
            />
          }
        />
      </div>
    </div>
  );
};
