import { Menu } from "lucide-react";

export const SidebarToggleButton = () => {
  return (
    <button
      // onClick={onMenuClick}
      className="absolute top-2.5 right-1 cursor-pointer rounded-md px-2.5 py-2 text-slate-300 transition-colors duration-200 hover:bg-slate-700/20 hover:text-red-100"
    >
      <Menu className="size-5.5" />
    </button>
  );
};
