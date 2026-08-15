import { useState } from "react";

export const useSelect = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  return {
    isOpen,
    toggle,
    close,
  };
};
