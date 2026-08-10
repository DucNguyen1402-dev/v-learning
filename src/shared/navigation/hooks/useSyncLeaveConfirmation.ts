import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function useSyncLeaveConfirmation(enabled: boolean) {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.state?.shouldConfirmLeave === enabled) return;
    navigate(".", {
      replace: true,
      state: {
        ...location.state,
        shouldConfirmLeave: enabled,
      },
    });
  }, [enabled, location.state, navigate]);
}
