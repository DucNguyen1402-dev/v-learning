import { useMemo } from "react";
import type { ReactNode } from "react";

import { useModal } from "./hooks";
import { ModalContext } from "./ModalContext";
import type { ModalContextValues } from "./types";

type ModalProviderProps = {
  children: ReactNode;
};
export const ModalProvider = ({ children }: ModalProviderProps) => {
  const { modalState, isLoading, open, closeModal, startLoading } = useModal();
  const value: ModalContextValues = useMemo(
    () => ({
      open,
      close: closeModal,
      internal: {
        state: {
          modalState,
          isLoading,
        },
        actions: {
          startLoading,
          closeModal,
        },
      },
    }),
    [open, modalState, isLoading, startLoading, closeModal],
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
