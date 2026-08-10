import { useEffect, useState } from "react";

export function useTemporaryState<T>(initialValue: T, duration = 2000) {
  const [state, setState] = useState<T | null>(initialValue);

  useEffect(() => {
    if (state == null) return;

    const timer = setTimeout(() => {
      setState(null);
    }, duration);

    return () => clearTimeout(timer);
  }, [state, duration]);

  return [state];
}
