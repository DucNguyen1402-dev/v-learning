import { useCallback, useMemo, useState } from "react";
import type { ReactNode } from "react";

import { ModalContext } from "./ModalContext";
import type { ModalContextValues, ModalState } from "./types";

type ModalProviderProps = {
  children: ReactNode;
};
const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    type: null,
    title: "",
    subtitle: "",
    onConfirm: null,
    onCancel: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = useCallback(() => setIsLoading(true), []);

  const open = useCallback(
    ({ type, onConfirm, title, subtitle, onCancel }) =>
      setModalState({
        type,
        onConfirm,
        title,
        subtitle,
        onCancel,
        isOpen: true,
      }),
    [],
  );

  const closeModal = useCallback(() => {
    setModalState({
      type: null,
      onConfirm: null,
      title: "",
      subtitle: "",
      onCancel: null,
      isOpen: false,
    });
    setIsLoading(false);
  }, []);

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

export default ModalProvider;
