import { useLocation } from "react-router-dom";

export const useLocationPayload = <T = unknown>() => {
  const location = useLocation();
  return location.state?.payload as T | undefined;
};
