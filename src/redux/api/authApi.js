import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserInfo: builder.query({
      query: (id) => ({
        url: `/auth/profile`,
        method: "GET",
      }),
      invalidatesTags: ["users"],
    }),
    updateProfile: builder.mutation({
      query: (data) => ({
        url: "/auth/update-profile-info",
        method: "PUT",
        data,
      }),
      providesTags: ["users"],
    }),
    // login
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        data: data,
      }),
      providesTags: ["users"],
    }),

    registerForEmail: builder.mutation({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        data: data, // Fixed here
      }),
      providesTags: ["users"],
    }),
  }),
});

export const {
  useGetUserInfoQuery,
  useUpdateProfileMutation,
  useRegisterForEmailMutation,
  useLoginMutation,
} = authApi;
