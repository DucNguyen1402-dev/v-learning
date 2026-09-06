import { browserStorages } from "@shared/auth/config";

import { USER_STORAGE_KEY } from "../constants";
import type { CurrentUser } from "../types";

export const saveCurrentUser = (
  user: CurrentUser,
  remember: boolean = true,
) => {
  const targetStorage = remember ? localStorage : sessionStorage;

  browserStorages.forEach((s) => s.removeItem(USER_STORAGE_KEY));

  targetStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
};
