/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiRequest } from "../client/request";
import React from "react";

export namespace State {
  export interface Authentication {
    request?: ApiRequest.Auth;
    postUrl: string;
    formMethod?: string;
    token?: string;
  }

  export interface Global {
    pageTitle?: string;
    record?: any;
    request?: any;
    postUrl?: string;
    getUrl?: string;
    updateUrl?: string;
    selectUrl: string;
    deleteUrl?: string;
    formMethod?: string;
    page?: number;
    pageSize?: number;
    searchTerm?: string;
    selectField?: string;
    selectedRowKeys?: React.Key[];
    showDownloadModal?: boolean;
    showAddUserModal?: boolean;
    currentForgotPasswordStep: number;
    userEmail?: string;
  }
}
