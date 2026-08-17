import { browserStorages } from "@shared/auth/config";

import { USER_STORAGE_KEY } from "../constants";

export const getCurrentUserStorage = () =>
  browserStorages.find((storage) => storage.getItem(USER_STORAGE_KEY)) ?? null;
