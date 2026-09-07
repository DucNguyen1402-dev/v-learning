import { browserStorages } from "../../config";
import { USER_STORAGE_KEY } from "../constants";

export const hasStoredCurrentUser = () => {
  for (const storage of browserStorages) {
    const item = storage.getItem(USER_STORAGE_KEY);
    if (item) return true;
  }
  return false;
};
