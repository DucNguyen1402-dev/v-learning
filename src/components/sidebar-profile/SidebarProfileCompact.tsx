import { Link } from "react-router-dom";

export const SidebarProfileCompact = () => {
  const isSidebarOpen = true;
  return (
    <div
      className={`absolute right-2 bottom-3 rounded-full border-2 border-slate-100 ${isSidebarOpen ? "pointer-events-none opacity-0" : ""}`}
    >
      <Link
        to="/admin/profile"
        className="flex h-8.5 w-8.5 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-yellow-600 text-lg font-bold text-slate-100 transition-colors duration-300 hover:bg-yellow-500"
      >
        {/* {storageAvatar ? (
            <img src={storageAvatar} alt="user avatar" />
          ) : (
            avatarName
          )} */}
      </Link>
    </div>
  );
};
