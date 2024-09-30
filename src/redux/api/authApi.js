import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserInfo: builder.query({
      query: (id) => ({
        url: `/api/auth/get-info`,
        method: "GET",
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const { useGetUserInfoQuery } = authApi;
