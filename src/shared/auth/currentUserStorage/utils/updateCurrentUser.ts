import { USER_STORAGE_KEY } from "../constants";
import type { CurrentUser } from "../types";
import { getCurrentUserStorage } from "./getCurrentUserStorage";
import { tryGetCurrentUserFromStorage } from "./tryGetCurrentUserFromStorage";

export const updateCurrentUser = (patch: Partial<CurrentUser>) => {
  const user = tryGetCurrentUserFromStorage();
  const storage = getCurrentUserStorage();

  if (!user || !storage) return undefined;

  storage.setItem(
    USER_STORAGE_KEY,
    JSON.stringify({
      ...user,
      ...patch,
    }),
  );
};
