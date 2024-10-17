import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserInfo: builder.query({
      query: (id) => ({
        url: `/auth/profile`,
        method: "GET",
      }),
      invalidatesTags: [tagTypes.user],
    }),
    updateProfile: builder.mutation({
      query: (data) => ({
        url: "/auth/update-profile-info",
        method: "PUT",
        data,
      }),
      providesTags: [tagTypes.user],
    }),

    //  fetch better balance query
    getBetterBalance: builder.query({
      query: () => ({
        url: "/auth/get-single-better-balance",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),

    // login
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        data: data,
      }),
      providesTags: [tagTypes.user],
    }),

    registerForEmail: builder.mutation({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        data: data, // Fixed here
      }),
      providesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useGetUserInfoQuery,
  useUpdateProfileMutation,
  useRegisterForEmailMutation,
  useLoginMutation,
  useGetBetterBalanceQuery,
} = authApi;
