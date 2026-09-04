import { Navigation } from "@shared/navigation";
import { EmptyFeature } from "@shared/ui";

export const BlogsPage = () => {
  Navigation.hooks.useScrollToTopOnRouteChange();
  return (
    <div className="flex min-h-screen items-start justify-center gap-6 py-8 md:px-4">
      <EmptyFeature title="Blogs" />
    </div>
  );
};
