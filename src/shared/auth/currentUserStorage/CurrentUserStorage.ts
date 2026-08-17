import {
  getCurrentUser,
  getCurrentUserProperty,
  getCurrentUserStorage,
  saveCurrentUser,
  updateCurrentUser,
} from "./utils";

export const CurrentUserStorage = {
  save: saveCurrentUser,
  get: getCurrentUser,
  update: updateCurrentUser,
  getStorage: getCurrentUserStorage,
  getProperty: getCurrentUserProperty,
};
