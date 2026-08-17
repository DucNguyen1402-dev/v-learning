import { USER_STORAGE_KEY } from "../constants";
import type { CurrentUser } from "../types";
import { getCurrentUser } from "./getCurrentUser";
import { getCurrentUserStorage } from "./getCurrentUserStorage";

export const updateCurrentUser = (patch: Partial<CurrentUser>) => {
  const user = getCurrentUser();
  const storage = getCurrentUserStorage();

  if (!user || !storage) return;

  storage.setItem(
    USER_STORAGE_KEY,
    JSON.stringify({
      ...user,
      ...patch,
    }),
  );
};
