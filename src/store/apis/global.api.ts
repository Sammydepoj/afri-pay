/* eslint-disable @typescript-eslint/no-explicit-any */
import { FORM_METHODS, ROUTE } from "../../common/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Encryption } from "../../common/utils/encryption";

export const baseUrl = import.meta.env.VITE_APP_BASE_URL;

export const userToken = () => {
  if (
    sessionStorage.getItem(import.meta.env.VITE_APP_TOKEN) &&
    sessionStorage.getItem(import.meta.env.VITE_APP_TOKEN)?.length
  ) {
    return JSON.parse(
      Encryption.decrypt(
        sessionStorage.getItem(import.meta.env.VITE_APP_TOKEN) as string
      )
    );
  }
  sessionStorage.clear();
  window.location.href = ROUTE.INDEX;
  return;
};

type BaseQueryType = ReturnType<typeof fetchBaseQuery>;

export const baseQueryWithReauth: (baseQuery: BaseQueryType) => BaseQueryType =
  (baseQuery) => async (args: any, api: any, extraOptions: any) => {
    const result = await baseQuery(args, api, extraOptions);
    if (result.error && result.error.status === 401) {
      sessionStorage.clear();
      // window.location.href = ROUTE.INDEX;
    }
    return result;
  };

export const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers) => {
    if (
      sessionStorage.getItem(import.meta.env.VITE_APP_TOKEN) &&
      sessionStorage.getItem(import.meta.env.VITE_APP_TOKEN)?.length
    ) {
      headers.set("Authorization", `Bearer ${userToken()}`);
      return headers;
    }
  },
});

export const globalApi = createApi({
  reducerPath: "globalApi",
  baseQuery: baseQueryWithReauth(baseQuery),
  // refetchOnFocus: true,
  refetchOnMountOrArgChange: true,
  refetchOnReconnect: true,
  tagTypes: ["GetData"],
  endpoints: (builder) => ({
    getData: builder.query({
      query: (data) => {
        return {
          url: `${data.getUrl}`,
        };
      },
      providesTags: ["GetData"],
    }),

    getUserInfo: builder.mutation({
      query: (data) => {
        return {
          url: data.postUrl,
          method: FORM_METHODS.POST,
        };
      },
    }),

    getDataByPostMethodSecured: builder.mutation({
      query: (data) => {
        return {
          url: data.getPostUrl,
          method: FORM_METHODS.POST,
          body: {
            ...data.request,
            page: data.page,
            size: data.pageSize,
          },
        };
      },
    }),
    postData: builder.mutation({
      query: (data) => {
        return {
          url: data.postUrl,
          method: FORM_METHODS.POST,
          body: data.request,
        };
      },
      invalidatesTags: (_result, _error, arg) => [
        { type: "GetData", id: arg.id },
      ],
    }),
    updateData: builder.mutation({
      query: (data) => {
        return {
          url: data.updateUrl,
          method: FORM_METHODS.POST,
          body: data.request,
        };
      },
      invalidatesTags: (_result, _error, arg) => [
        { type: "GetData", id: arg.id },
      ],
    }),
  }),
});

export const {
  useGetUserInfoMutation,
  useGetDataByPostMethodSecuredMutation,
  usePostDataMutation,
  useUpdateDataMutation,
  useGetDataQuery,
  useLazyGetDataQuery,
} = globalApi;
