import { deleteAccessToken } from "../accessTokenStorage/utils/deleteAccessToken";
import { deleteCurrentUser } from "../currentUserStorage/utils/deleteCurrentUser";

export const clearAuthSession = () => {
  deleteAccessToken();
  deleteCurrentUser();
};
