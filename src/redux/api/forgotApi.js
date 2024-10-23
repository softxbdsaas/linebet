import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const forgotApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    forgotPassword: builder.mutation({
      query: (data) => ({
        url: `/auth/forgot-password`,
        method: "POST",
        data,
      }),
      providesTags: [tagTypes.user],
    }),

    verifyOtp: builder.mutation({
      query: (data) => ({
        url: `/auth/verify-otp`,
        method: "POST",
        data,
      }),
      providesTags: [tagTypes.user],
    }),
    resentOtp: builder.mutation({
      query: (data) => ({
        url: `/auth/resent-otp`,
        method: "POST",
        data,
      }),
      providesTags: [tagTypes.user],
    }),

    setPassword: builder.mutation({
      query: (data) => ({
        url: `/auth/set-password`,
        method: "POST",
        data,
      }),
      providesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useForgotPasswordMutation,
  useVerifyOtpMutation,
  useResentOtpMutation,
  useSetPasswordMutation,
} = forgotApi;
