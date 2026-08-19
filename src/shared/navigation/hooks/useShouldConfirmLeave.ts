import { useLocation } from "react-router-dom";

export const useShouldConfirmLeave = () => {
  const location = useLocation();
  return location.state?.shouldConfirmLeave ?? false;
};
