import { Navigation } from "@shared/navigation";
import { ACTION_LABELS } from "@shared/ui";

export const LoginButton = () => (
  <Navigation.components.Go
    routeKey={Navigation.client.keys.LOGIN}
    className="button-primary solid button-base px-3 py-1.5 text-[13px] md:px-4 md:py-2 md:text-sm"
  >
    {ACTION_LABELS.LOGIN}
  </Navigation.components.Go>
);
