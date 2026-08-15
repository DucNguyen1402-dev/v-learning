import { useState } from "react";

export const useSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<string | number | null>(null);
  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  return {
    isOpen,
    value,
    toggle,
    close,
    setValue,
  };
};
