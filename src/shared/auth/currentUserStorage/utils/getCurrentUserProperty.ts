import { browserStorages } from "@shared/auth/config";

import { USER_STORAGE_KEY } from "../constants";
import type { CurrentUser } from "../types";

export const getCurrentUserProperty = <K extends keyof CurrentUser>(
  property: K,
): CurrentUser[K] | undefined => {
  for (const storage of browserStorages) {
    const item = storage.getItem(USER_STORAGE_KEY);
    if (item) {
      const user: CurrentUser = JSON.parse(item);
      if (user?.[property] !== undefined) return user[property];
    }
  }
  return undefined;
};
