import { useCallback, useState } from "react";

import type { ModalConfig, ModalState } from "../types";
export const useModal = () => {
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
    ({ type, onConfirm, title, subtitle = "", onCancel = null }: ModalConfig) =>
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

  return {
    modalState,
    isLoading,
    open,
    closeModal,
    startLoading,
  };
};
