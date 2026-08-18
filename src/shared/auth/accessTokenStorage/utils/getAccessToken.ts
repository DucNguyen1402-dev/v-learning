import { browserStorages } from "@shared/auth/config";

import { ACCESS_TOKEN_STORAGE_KEY } from "../constants";

export const getAccessToken = (): string | undefined => {
  for (const storage of browserStorages) {
    const item = storage.getItem(ACCESS_TOKEN_STORAGE_KEY);
    if (item) return JSON.parse(item);
  }
  return undefined;
};
