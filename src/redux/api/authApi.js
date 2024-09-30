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
    updateProfile: builder.mutation({
      query: (data) => ({
        url: "/api/auth/update-profile-info",
        method: "PUT",
        data: data,
      }),
      providesTags: ["users"],
    }),
  }),
});

export const { useGetUserInfoQuery, useUpdateProfileMutation } = authApi;
