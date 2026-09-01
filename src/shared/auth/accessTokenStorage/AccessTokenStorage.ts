import { getAccessToken, isLogin, saveAccessToken } from "./utils";
export const AccessTokenStorage = {
  save: saveAccessToken,
  get: getAccessToken,
  isLogin: isLogin,
};
