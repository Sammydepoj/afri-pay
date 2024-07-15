import { Encryption } from "./utils/encryption";

export enum MENU_KEYS {
  DASHBOARD = "1",
  PROFILE = "2",
  TRANSACTION = "3",
  TERMINAL_MGT = "4",
  CONFIGURATIONS = "5",
  USER_MGT = "6",
  PROCESSOR = "7",
  TRANSACTION_ROUTING = "01",
  CHARGE_CONFIGURATION = "02",
  SYSTEM_USERS = "03",
  ROLES = "04",
  PERMISSION = "05",
  SYSTEM_TERMINAL_MGT = "06",
  PROCESSOR_TERMINAL_MGT = "07",
}

export enum MENU_NAMES {
  DASHBOARD = "Dashboard",
  PROFILE = "Profile",
  TRANSACTION = "Transaction",
  TERMINAL_MGT = "Terminals Mgt.",
  CONFIGURATIONS = "Configurations",
  USER_MGT = "User Mgt.",
  TRANSACTION_ROUTING = "Transaction routing",
  CHARGE_CONFIGURATION = "Charge configurations",
  SYSTEM_USERS = "System Users",
  ROLES = "Roles",
  PERMISSION = "Permissions",
  SYSTEM_TERMINAL_MGT = "System Terminal Mgt.",
  PROCESSOR_TERMINAL_MGT = "Processor Terminal Mgt.",
  PROCESSOR = "Processor Mgt.",
}

export enum ROUTE {
  INDEX = "/",
  DASHBOARD = "/dashboard",
  USER_MGT = "/users",
  PAGE_NOT_FOUND = "*",
}

export enum FORM_METHODS {
  POST = "POST",
  GET = "GET",
}

export const RESPONSE_CODE = {
  successful: "00",
  badRequest: "400",
  noData: "201",
  internalServerError: "500",
  dataDuplication: " 230",
  unAuthorized: "401",
  invalidToken: "400",
};
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
