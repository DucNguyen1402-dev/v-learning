import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useShouldConfirmLeave } from "./useShouldConfirmLeave";

export function useSyncLeaveConfirmation(enabled: boolean) {
  const navigate = useNavigate();
  const location = useLocation();
  const shouldConfirmLeave = useShouldConfirmLeave();
  useEffect(() => {
    if (shouldConfirmLeave === enabled) return;
    navigate(".", {
      replace: true,
      state: {
        ...location.state,
        shouldConfirmLeave: enabled,
      },
    });
  }, [enabled, location.state, navigate, shouldConfirmLeave]);
}
