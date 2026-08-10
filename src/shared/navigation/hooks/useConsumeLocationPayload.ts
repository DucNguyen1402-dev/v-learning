import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
export function useConsumeLocationPayload() {
  const location = useLocation();
  const navigate = useNavigate();

  return useCallback(() => {
    navigate(".", {
      replace: true,
      state: { ...location?.state, payload: null },
    });
  }, [location.state, navigate]);
}
