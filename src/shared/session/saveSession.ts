import {
  AccessTokenStorage,
  type CurrentUser,
  CurrentUserStorage,
} from "@shared/storage";

type LoginMutationVariables = {
  currentUser: CurrentUser;
  remember: boolean;
  accessToken: string;
};
export const saveSession = ({
  accessToken,
  currentUser,
  remember,
}: LoginMutationVariables) => {
  AccessTokenStorage.save(accessToken, remember);
  CurrentUserStorage.save(currentUser, remember);
};
