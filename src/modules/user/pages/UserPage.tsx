import { useEffect, useRef } from "react";

import { Navigation } from "@shared/navigation";
import { Toast } from "@shared/overlays";
import { useTemporaryState } from "@shared/state";
import { Pagination } from "@shared/table";

import {
  AddUserButton,
  UserFooter,
  UserRoleFilter,
  UserSearchBar,
  UserTable,
} from "../components";
import { useUserContext } from "../contexts";
import type { UserLocationPayload } from "../types";

export const UserPage = () => {
  Navigation.hooks.useScrollToTopOnRouteChange();

  const { show: showToast } = Toast.use();
  const [payload] = useTemporaryState(
    Navigation.hooks.usePayload<UserLocationPayload>(),
  );
  const consumePayload =
    Navigation.hooks.useConsumePayload<UserLocationPayload>();
  const hasShownToast = useRef(false);

  useEffect(() => {
    if (!payload?.toastState || hasShownToast.current) return;
    showToast(payload.toastState);
    hasShownToast.current = true;
    consumePayload();
  }, [
    payload?.toastState,
    showToast,
    consumePayload,
    payload?.shouldRefreshFilters,
  ]);

  const {
    processedUsers,
    isLocalPagination,
    filter: { refreshFilters },
  } = useUserContext();
  const paginationItems = isLocalPagination ? processedUsers : [];

  if (payload?.shouldRefreshFilters) refreshFilters();

  return (
    <Pagination.Provider items={paginationItems} resetDeps={[paginationItems]}>
      <div className="min-h-screen pt-20 pb-20">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-8 select-none md:flex-row md:items-center md:justify-between">
            <div className="flex flex-1 flex-col gap-5 md:flex-row md:items-center">
              <div className="w-full max-w-80">
                <UserSearchBar />
              </div>
              <UserRoleFilter />
            </div>

            <AddUserButton />
          </div>
          <UserTable affectedUserAccount={payload?.taiKhoan} />
          <UserFooter />
        </div>
      </div>
    </Pagination.Provider>
  );
};
