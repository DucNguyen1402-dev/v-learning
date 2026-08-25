import { Link } from "react-router-dom";

import { SquareArrowRightExit, UserPen } from "lucide-react";

export const SidebarProfile = () => {
  const isSidebarOpen = true;
  return (
    <div
      className={`flex items-center space-x-3 border-t border-gray-800 p-4 transition-opacity duration-300 ${isSidebarOpen ? "" : "pointer-events-none opacity-0"}`}
    >
      <div className="group relative">
        <div className="before:absolute before:bottom-full before:left-0 before:h-4 before:w-full before:bg-transparent before:content-['']"></div>

        {/* <button className="flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 border-slate-100 bg-yellow-600 text-lg font-bold text-slate-100 transition-colors duration-300 hover:bg-yellow-500">
            {storageAvatar ? (
              <img src={storageAvatar} alt="user avatar" />
            ) : (
              avatarName
            )}
          </button> */}
        <div className="pointer-events-none absolute bottom-10 left-0 w-50 overflow-hidden rounded-xl border border-gray-700 bg-[#1f1f1f] opacity-0 shadow-2xl transition-opacity duration-500 group-hover:pointer-events-auto group-hover:opacity-100">
          <Link
            className="flex w-full cursor-pointer items-center gap-3 px-4 py-3 transition-colors duration-300 hover:bg-gray-800"
            to="/admin/profile"
          >
            <UserPen className="text-lg text-gray-400" />
            <span className="text-sm text-white">Hồ sơ</span>
          </Link>
          <div className="h-px bg-gray-700" />

          <button
            // onClick={onLogoutClick}
            className="flex w-full cursor-pointer items-center gap-3 px-4 py-3 text-red-400 transition-colors duration-300 hover:bg-red-500/10"
          >
            <SquareArrowRightExit className="text-lg" />
            <span className="text-sm">Đăng xuất</span>
          </button>
        </div>
      </div>
      <div className="min-w-0 flex-1 space-y-1">
        {/* <p className="truncate text-sm font-medium text-slate-100">
            {account}
          </p> */}
        <p className="truncate text-xs text-slate-400">admin</p>
      </div>
    </div>
  );
};
