import { getAccessToken, saveAccessToken } from "./utils";
export const AccessTokenStorage = {
  save: saveAccessToken,
  get: getAccessToken,
};
