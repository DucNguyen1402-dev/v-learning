import { STORAGE_KEYS } from "@shared/auth/constants";
import type { CurrentUser } from "@shared/auth/types";

const storages = [localStorage, sessionStorage];

export const getCurrentUser = () => {
  for (const storage of storages) {
    const item = storage.getItem(STORAGE_KEYS.USER);
    if (item) return JSON.parse(item);
  }
  return null;
};

export const findCurrentUserStorage = () =>
  storages.find((storage) => storage.getItem(STORAGE_KEYS.USER)) ?? null;

export const getCurrentUserProperty = <K extends keyof CurrentUser>(
  property: K,
): CurrentUser[K] | null => {
  for (const storage of storages) {
    const item = storage.getItem(STORAGE_KEYS.USER);
    if (item) {
      const user: CurrentUser = JSON.parse(item);
      if (user?.[property] !== undefined) return user[property];
    }
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
