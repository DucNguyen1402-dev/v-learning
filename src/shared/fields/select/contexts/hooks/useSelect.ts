import { useEffect, useRef, useState } from "react";

type option = {
  label: string;
  value: string | number;
};
export const useSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [option, setOption] = useState<option>({ label: "", value: "" });
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
    option,
    toggle,
    close,
    setOption,
    selectRef,
  };
};

export type UseSelectReturnType = ReturnType<typeof useSelect>;
