import { deleteAccessToken, deleteCurrentUser } from "@shared/storage";

export const clearSession = () => {
  deleteAccessToken();
  deleteCurrentUser();
};
