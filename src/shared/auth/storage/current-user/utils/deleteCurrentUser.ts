import { browserStorages } from "@shared/auth/config";

import { USER_STORAGE_KEY } from "../constants";
export const deleteCurrentUser = () => {
  for (const storage of browserStorages) {
    storage.removeItem(USER_STORAGE_KEY);
  }
};
