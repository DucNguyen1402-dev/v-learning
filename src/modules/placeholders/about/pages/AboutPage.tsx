import { Navigation } from "@shared/navigation";
import { EmptyFeature } from "@shared/ui";

export const AboutPage = () => {
  Navigation.hooks.useScrollOnRouteChange();
  return (
    <div className="flex min-h-screen items-start justify-center gap-6 py-8 md:px-4">
      <EmptyFeature title="Giới thiệu" />
    </div>
  );
};
