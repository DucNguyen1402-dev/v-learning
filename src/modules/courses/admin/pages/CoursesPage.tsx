import { useEffect } from "react";

import { Navigation } from "@shared/navigation";
import { Toast } from "@shared/overlays";
import { State } from "@shared/state";
import { Pagination } from "@shared/table";

import { useMovieListContext } from "@features/admin/movies/list/contexts";

import {
  AddMovieBtn,
  MoviesTable,
  MovieStatusFilter,
  SearchBar,
  SortSelect,
} from "../components";

import { Layout } from "@/layouts/admin";

export const CoursesPage = () => {
  const { isSidebarOpen } = Layout.use();
  const {
    trailer: { trailer },
    pagination,
  } = useMovieListContext();

  const { show: showToast } = Toast.use();
  const [toastState] = State.useTemporary(Navigation.hooks.usePayload());
  const consumePayload = Navigation.hooks.useConsumePayload();

  useEffect(() => {
    if (!toastState) return;
    showToast(toastState);

    consumePayload();
  }, [toastState, showToast, consumePayload]);

  return (
    <div className="min-h-screen bg-[#0f172a] px-6 pt-10 pb-8 font-sans text-slate-100">
      <div
        className={`mx-auto w-full space-y-8 transition-[max-width] duration-300 ease-in-out ${isSidebarOpen ? "max-w-full 2xl:max-w-360" : "max-w-7xl 2xl:max-w-340"}`}
      >
        <div className="flex items-center justify-end">
          <div className="flex flex-col gap-4">
            <AddMovieBtn />
          </div>
        </div>

        <div className="grid grid-cols-6 gap-3 rounded-2xl border border-slate-800/80 bg-[#1e293b]/50 p-4 backdrop-blur-sm">
          <div className="col-span-3">
            <SearchBar />
          </div>
          <MovieStatusFilter />
          <SortSelect />
          <Pagination.components.Select
            value={pagination.state.currentSize}
            onChange={() => {}}
          />
        </div>

        <MoviesTable />
      </div>
    </div>
  );
};
