import { getAccessToken } from "./getAccessToken";
export const isLogin = (): boolean => {
  const token = getAccessToken();
  return !!token;
};
