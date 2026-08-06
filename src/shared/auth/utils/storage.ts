import { type CurrentUser, STORAGE_KEYS } from "@shared/auth";

const storages = [localStorage, sessionStorage];

export const getCurrentUser = () => {
  for (const storage of storages) {
    const item = storage.getItem(STORAGE_KEYS.USER);
    if (item) return JSON.parse(item);
  }
  return null;
};

export const saveCurrentUser = (
  user: CurrentUser,
  remember: boolean = true,
) => {
  const targetStorage = remember ? localStorage : sessionStorage;

  storages.forEach((s) => s.removeItem(STORAGE_KEYS.USER));

  targetStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
};

export const saveAccessToken = (token: string, remember: boolean = true) => {
  const targetStorage = remember ? localStorage : sessionStorage;

  storages.forEach((s) => s.removeItem(STORAGE_KEYS.ACCESS_TOKEN));

  targetStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, JSON.stringify(token));
};

const AUTH_KEYS = [STORAGE_KEYS.USER, STORAGE_KEYS.ACCESS_TOKEN];

export const clearAuthSession = () => {
  storages.forEach((storage) => {
    AUTH_KEYS.forEach((key) => storage.removeItem(key));
  });
};
