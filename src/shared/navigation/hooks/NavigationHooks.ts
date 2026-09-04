import { useConsumeLocationPayload } from "./useConsumeLocationPayload";
import { useCurrentArea } from "./useCurrentArea";
import { useLocationPayload } from "./useLocationPayload";
import { useNavigateWithState } from "./useNavigateWithState";
import { useScrollOnRouteChange } from "./useScrollOnRouteChange";
import { useScrollToTopOnRouteChange } from "./useScrollToTopOnRouteChange";
import { useShouldConfirmLeave } from "./useShouldConfirmLeave";
import { useSyncLeaveConfirmation } from "./useSyncLeaveConfirmation";

export const NavigationHooks = {
  useConsumePayload: useConsumeLocationPayload,
  useNavigateWithState,
  useScrollOnRouteChange,
  useSyncLeaveConfirmation,
  usePayload: useLocationPayload,
  useShouldConfirmLeave,
  useCurrentArea,
  useScrollToTopOnRouteChange,
};
