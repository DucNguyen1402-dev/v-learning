import {
  getCurrentUserProperty,
  getCurrentUserStorage,
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
};
