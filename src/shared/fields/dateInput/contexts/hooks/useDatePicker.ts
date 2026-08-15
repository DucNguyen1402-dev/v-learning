import { useEffect, useRef, useState } from "react";

export const useDatePicker = () => {
  const [isDatePickerOpen, setDayPickerVisible] = useState(false);
  const datePickerRef = useRef<HTMLDivElement | null>(null);

  const toggleDatePicker = () => setDayPickerVisible((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        datePickerRef.current &&
        !datePickerRef.current.contains(e.target as Node)
      ) {
        setDayPickerVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return {
    isDatePickerOpen,
    toggleDatePicker,
    datePickerRef,
  };
};
