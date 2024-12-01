import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";
const WITHDRAW = "/withdraw";
const withdrawalsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createWithdraw: builder.mutation({
      query: (data) => ({
        url: `${WITHDRAW}/withdraw-request`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.withdraws,tagTypes.user],
    }),
    getLockWithdraw: builder.query({
      query: () => ({
        url: `${WITHDRAW}/withdrawal-amount-lock-single`,
        method: "GET",
      }),
      providesTags: [tagTypes.withdraws],
    }),
    getAllPendingWithdrawRequestBySingleBetter: builder.query({
      query: () => ({
        url: `${WITHDRAW}/get-all-pending-single-better-by-withdraw-request`,
        method: "GET",
      }),
      providesTags: [tagTypes.withdraws],
    }),
    getAllWithdrawRequest: builder.query({
      query: () => ({
        url: `${WITHDRAW}/get-single-better-by-all-withdraw-request`,
        method: "GET",
      }),
      providesTags: [tagTypes.withdraws],
    }),
  }),
});

export const {
  useCreateWithdrawMutation,
  useGetLockWithdrawQuery,
  useGetAllPendingWithdrawRequestBySingleBetterQuery,
  useGetAllWithdrawRequestQuery
} = withdrawalsApi;
