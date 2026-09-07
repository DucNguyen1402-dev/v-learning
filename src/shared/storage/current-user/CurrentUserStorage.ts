import {
  getCurrentUser,
  getCurrentUserProperty,
  getCurrentUserStorage,
  hasStoredCurrentUser,
  isAdmin,
  saveCurrentUser,
  tryGetCurrentUserFromStorage,
  updateCurrentUser,
} from "./utils";

export const CurrentUserStorage = {
  save: saveCurrentUser,
  tryGet: tryGetCurrentUserFromStorage,
  update: updateCurrentUser,
  getStorage: getCurrentUserStorage,
  getProperty: getCurrentUserProperty,
  get: getCurrentUser,
  hasStored: hasStoredCurrentUser,
  isAdmin: isAdmin,
};
