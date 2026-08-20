import { Navigation } from "@shared/navigation";
import { ACTION_LABELS } from "@shared/ui";

export const LoginButton = () => (
  <Navigation.components.Go
    routeKey={Navigation.client.keys.LOGIN}
    className="button-primary solid button-base px-4 py-2 text-sm"
  >
    {ACTION_LABELS.LOGIN}
  </Navigation.components.Go>
);
