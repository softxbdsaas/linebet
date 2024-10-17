import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";
const BONUS = "/bonus";
const bonusApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // createWithdraw: builder.mutation({
    //   query: (data) => ({
    //     url: `${WITHDRAW}/better-deposit-request`,
    //     method: "POST",
    //     data: data,
    //   }),
    //   invalidatesTags: [tagTypes.withdraws],
    // }),
    getWelcomeBonusHistory: builder.query({
      query: () => ({
        url: `${BONUS}/welcome-bonus-history-single-better`,
        method: "GET",
      }),
      providesTags: [tagTypes.bonus],
    }),
  }),
});

export const { useGetWelcomeBonusHistoryQuery } = bonusApi;
