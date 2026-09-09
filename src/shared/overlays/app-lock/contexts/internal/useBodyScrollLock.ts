import { useEffect, useState } from "react";

export const useBodyScrollLock = () => {
  const [isLocked, setIsLocked] = useState(false);

  const shouldLockBodyScroll = (shouldLock: boolean) => setIsLocked(shouldLock);
  useEffect(() => {
    if (!isLocked) return;

    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isLocked]);
  return { shouldLockBodyScroll };
};

export type UseBodyScrollLockReturn = ReturnType<typeof useBodyScrollLock>;
