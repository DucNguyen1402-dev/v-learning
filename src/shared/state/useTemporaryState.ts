import { useEffect, useState } from "react";

export function useTemporaryState<T>(initialValue: T, duration = 2000) {
  const [state, setState] = useState<T | undefined>(initialValue);

  useEffect(() => {
    if (state == undefined) return;

    const timer = setTimeout(() => {
      setState(undefined);
    }, duration);

    return () => clearTimeout(timer);
  }, [state, duration]);

  return [state];
}
