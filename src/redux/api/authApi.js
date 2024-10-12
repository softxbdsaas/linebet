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
        data: data,
      }),
      providesTags: ["users"],
    }),
    registerForEmail: builder.mutation({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),
      providesTags: ["users"],
    }),
  }),
});

export const {
  useGetUserInfoQuery,
  useUpdateProfileMutation,
  useRegisterForEmailMutation,
} = authApi;
