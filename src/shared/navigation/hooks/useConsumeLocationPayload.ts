import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function useConsumeLocationPayload() {
  const location = useLocation();
  const navigate = useNavigate();

  return useCallback(
    <TPayload extends Record<string, unknown>, K extends keyof TPayload>(
      payloadKey?: K,
    ) => {
      const payload = location.state?.payload as TPayload | undefined;

      if (!payload) return;

      let nextPayload: Partial<TPayload> | undefined;

      if (payloadKey) {
        const { [payloadKey]: _, ...rest } = payload;
        nextPayload = Object.keys(rest).length
          ? (rest as Partial<TPayload>)
          : undefined;
      }

      navigate(".", {
        replace: true,
        state: {
          ...location.state,
          payload: nextPayload,
        },
      });
    },
    [location.state, navigate],
  );
}
