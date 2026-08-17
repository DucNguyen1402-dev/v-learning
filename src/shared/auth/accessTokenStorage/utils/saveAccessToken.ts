import { browserStorages } from "@shared/auth/config";

import { ACCESS_TOKEN_STORAGE_KEY } from "../constants";

export const saveAccessToken = (token: string, remember: boolean = true) => {
  const targetStorage = remember ? localStorage : sessionStorage;

  browserStorages.forEach((s) => s.removeItem(ACCESS_TOKEN_STORAGE_KEY));

  targetStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, JSON.stringify(token));
};
