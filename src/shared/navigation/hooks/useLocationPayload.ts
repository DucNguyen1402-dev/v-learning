import { useLocation } from "react-router-dom";

export const useLocationPayload = () => {
  const location = useLocation();
  return location.state?.payload;
};
