import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { State } from "../../model/application/state";

const loginApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_BASE_URL,
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data: State.Authentication) => {
        return {
          url: data.postUrl,
          method: "POST",
          body: data.request,
        };
      },
    }),
    sendPasswordChange: builder.mutation({
      query: (data: State.Authentication) => {
        return {
          url: data.postUrl,
          method: data.formMethod,
        };
      },
    }),
  }),
});

export const { useLoginMutation, useSendPasswordChangeMutation } = loginApi;
export default loginApi;
