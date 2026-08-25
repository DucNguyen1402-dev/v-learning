import { useState } from "react";

export const useLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return {
    isSidebarOpen,
    toggleSidebar,
  };
};
export type UseLayoutReturnType = ReturnType<typeof useLayout>;
