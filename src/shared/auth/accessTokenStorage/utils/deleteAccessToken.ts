import { browserStorages } from "@shared/auth/config";

import { ACCESS_TOKEN_STORAGE_KEY } from "../constants";

export const deleteAccessToken = () => {
  browserStorages.forEach((s) => s.removeItem(ACCESS_TOKEN_STORAGE_KEY));
};
