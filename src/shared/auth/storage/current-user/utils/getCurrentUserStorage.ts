import { browserStorages } from "@shared/auth/config";

import { USER_STORAGE_KEY } from "../constants";

export const getCurrentUserStorage = () => {
  const storage = browserStorages.find((s) => s.getItem(USER_STORAGE_KEY));

  if (!storage) return undefined;
  return storage;
};
