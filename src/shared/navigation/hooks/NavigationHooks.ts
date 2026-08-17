import { useConsumeLocationPayload } from "./useConsumeLocationPayload";
import { useLocationPathname } from "./useLocationPathname";
import { useLocationPayload } from "./useLocationPayload";
import { useRouteNavigation } from "./useRouteNavigation";
import { useScrollOnRouteChange } from "./useScrollOnRouteChange";
import { useSyncLeaveConfirmation } from "./useSyncLeaveConfirmation";

export const NavigationHooks = {
  useConsumePayload: useConsumeLocationPayload,
  useNavigate: useRouteNavigation,
  useScrollOnRouteChange,
  useSyncLeaveConfirmation,
  usePayload: useLocationPayload,
  usePathname: useLocationPathname,
};
