import { browserStorages } from "@shared/auth/config";

import { USER_STORAGE_KEY } from "../constants";
import type { CurrentUser } from "../types";
export const getCurrentUser = (): CurrentUser => {
  for (const storage of browserStorages) {
    const item = storage.getItem(USER_STORAGE_KEY);
    if (item) return JSON.parse(item);
  }

  throw new Error("Current user not found in storage.");
};
