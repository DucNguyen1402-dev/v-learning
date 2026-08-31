import { Navigation } from "@shared/navigation";
import { EmptyFeature } from "@shared/ui";

export const BlogsPage = () => {
  Navigation.hooks.useScrollOnRouteChange();
  return <EmptyFeature title="Blogs" />;
};
