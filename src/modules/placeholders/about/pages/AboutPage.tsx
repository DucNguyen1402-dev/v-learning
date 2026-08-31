import { Navigation } from "@shared/navigation";
import { EmptyFeature } from "@shared/ui";

export const AboutPage = () => {
  Navigation.hooks.useScrollOnRouteChange();
  return <EmptyFeature title="About" />;
};
