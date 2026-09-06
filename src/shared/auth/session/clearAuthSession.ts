import { deleteAccessToken, deleteCurrentUser } from "../storage";

export const clearAuthSession = () => {
  deleteAccessToken();
  deleteCurrentUser();
};
