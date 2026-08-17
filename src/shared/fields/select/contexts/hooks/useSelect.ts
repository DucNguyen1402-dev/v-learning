import { useEffect, useRef, useState } from "react";

export const useSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<string | number | null>(null);
  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        close();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return {
    isOpen,
    value,
    toggle,
    close,
    setValue,
    selectRef,
  };
};

export type UseSelectReturnType = ReturnType<typeof useSelect>;
