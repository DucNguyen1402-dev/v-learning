import {
  useConsumeLocationPayload,
  useLocationPathname,
  useLocationPayload,
  useRouteNavigation,
  useScrollOnRouteChange,
  useSyncLeaveConfirmation,
} from "./hooks";

export const Navigation = {
  useConsumePayload: useConsumeLocationPayload,
  useNavigate: useRouteNavigation,
  useScrollOnRouteChange,
  useSyncLeaveConfirmation,
  usePayload: useLocationPayload,
  usePathname: useLocationPathname,
};
