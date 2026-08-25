export const SidebarHeader = () => {
  const isSidebarOpen = true;
  return (
    <div
      className={`flex h-20 items-center border-b border-gray-800 px-6 transition-opacity duration-300 ease-in-out ${isSidebarOpen ? "" : "opacity-0"}`}
    >
      <div className="flex items-center gap-3">
        <div className="leading-tight">
          <h1 className="text-lg font-bold tracking-wide text-white">CINEMA</h1>
          <p className="text-xs tracking-[0.25em] text-red-500 uppercase">
            Admin Panel
          </p>
        </div>
      </div>
    </div>
  );
};
