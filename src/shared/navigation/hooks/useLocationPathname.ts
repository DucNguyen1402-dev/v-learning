import { useLocation } from "react-router-dom";
export const useLocationPathname = () => {
  const location = useLocation();
  return location.pathname;
};
