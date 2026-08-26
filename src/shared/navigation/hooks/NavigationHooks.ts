import { useCurrentArea } from "./useAppArea";
import { useConsumeLocationPayload } from "./useConsumeLocationPayload";
import { useLocationParams } from "./useLocationParams";
import { useLocationPathname } from "./useLocationPathname";
import { useLocationPayload } from "./useLocationPayload";
import { useRouteNavigation } from "./useRouteNavigation";
import { useScrollOnRouteChange } from "./useScrollOnRouteChange";
import { useShouldConfirmLeave } from "./useShouldConfirmLeave";
import { useSyncLeaveConfirmation } from "./useSyncLeaveConfirmation";

export const NavigationHooks = {
  useConsumePayload: useConsumeLocationPayload,
  useNavigate: useRouteNavigation,
  useScrollOnRouteChange,
  useSyncLeaveConfirmation,
  usePayload: useLocationPayload,
  usePathname: useLocationPathname,
  useShouldConfirmLeave,
  useCurrentArea,
  useParams: useLocationParams,
};
