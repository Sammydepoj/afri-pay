/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-explicit-any */
export namespace ApiResponse {
  export class API<T> {
    status?: string;
    responseCode?: string;
    failureReason?: string;
    data?: T;
  }
  export interface LoginResponseType {
    token: string;
    role: string;
    firstName: string;
    lastName: string;
    refreshToken: string;
  }
  export class Processor {
    id?: number;
    name?: string;
    ip?: string;
    port?: number;
    allowKeyExchange?: boolean;
    cardSchemes?: string[];
    createdDate?: string;
  }
}
