import { CurrentUserStorage } from "@shared/storage";

export const hasStoredCurrentUser = () => {
  return !!CurrentUserStorage.tryGet();
};
