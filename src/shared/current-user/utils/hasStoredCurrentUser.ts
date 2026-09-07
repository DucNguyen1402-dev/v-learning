import { CurrentUserStorage } from "@shared/storage";
export const hasStoredCurrentUser = () => {
  const currentUser = CurrentUserStorage.tryGet();
  return !!currentUser;
};
