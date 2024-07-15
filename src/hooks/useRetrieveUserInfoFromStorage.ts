import { Encryption } from "../common/utils/encryption";

export interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}
export const retrieveUserInfoFromStorage = () => {
  const userDetails: UserInfo =
    sessionStorage.getItem(import.meta.env.VITE_APP_USER_INFO as string) &&
    sessionStorage.getItem(import.meta.env.VITE_APP_USER_INFO as string)
      ?.length &&
    JSON.parse(
      Encryption.decrypt(
        sessionStorage.getItem(
          import.meta.env.VITE_APP_USER_INFO as string
        ) as string
      )
    );
  return { userDetails };
};
