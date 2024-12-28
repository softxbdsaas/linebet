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
      providesTags: [tagTypes.user, tagTypes.withdraws],
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
    // change password
    changePassword: builder.mutation({
      query: (data) => ({
        url: "/auth/change-password",
        method: "POST",
        data: data, // Fixed here
      }),
      providesTags: [tagTypes.user],
    }),

    // forgot password
    verifyEmail: builder.mutation({
      query: (data) => ({
        url: `/auth/email-verify`,
        method: "POST",
        data,
      }),
      providesTags: [tagTypes.user],
    }),

    emailOtpVerify: builder.mutation({
      query: (data) => ({
        url: `/auth/email-opt-verify`,
        method: "POST",
        data,
      }),
      providesTags: [tagTypes.user],
    }),

    sendEmilForUsernameAndPassword: builder.mutation({
      query: (data) => ({
        url: `/auth/send-email-for-send-username-and-email`,
        method: "POST",
        data,
      }),
      providesTags: [tagTypes.user],
    }),
    phoneNumberVerify: builder.mutation({
      query: (data) => ({
        url: `/auth/phone-number-verify/4`,
        method: "POST",
        data,
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
  useChangePasswordMutation,
  useVerifyEmailMutation,
  useEmailOtpVerifyMutation,
  usePhoneNumberVerifyMutation,
  useSendEmilForUsernameAndPasswordMutation
} = authApi;
