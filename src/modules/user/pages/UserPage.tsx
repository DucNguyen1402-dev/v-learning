import { useEffect } from "react";

import { Navigation } from "@shared/navigation";
import { Toast } from "@shared/overlays";
import { State } from "@shared/state";
import { Pagination } from "@shared/table";

import {
  AddUserButton,
  UserFooter,
  UserRoleFilter,
  UserSearchBar,
  UserTable,
} from "../components";
import { useUserContext } from "../contexts";

export const UserPage = () => {
  Navigation.hooks.useScrollOnRouteChange();

  const { show: showToast } = Toast.use();
  const [displayState] = State.useTemporary(Navigation.hooks.usePayload());
  const consumePayload = Navigation.hooks.useConsumePayload();

  useEffect(() => {
    if (!displayState?.toastState) return;
    showToast(displayState.toastState);

    consumePayload();
  }, [displayState?.toastState, showToast, consumePayload]);

  const { processedUsers, isLocalPagination } = useUserContext();

  const paginationItems = isLocalPagination ? processedUsers : [];

  return (
    <Pagination.Provider items={paginationItems} resetDeps={[processedUsers]}>
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
          <UserTable affectedUserAccount={displayState?.taiKhoan} />
          <UserFooter />
        </div>
      </div>
    </Pagination.Provider>
  );
};
