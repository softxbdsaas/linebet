import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createDeposit: builder.mutation({
      query: (data) => ({
        url: `/deposit/better-deposit-request`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.payments],
    }),

    getPaymentType: builder.query({
      query: () => ({
        url: "/payment/get-all-payment-types-for-client",
        method: "GET",
      }),
      providesTags: [tagTypes.payments],
    }),
    //    get all payment methods
    getAllPaymentMethods: builder.query({
      query: () => ({
        url: "/payment/get-all-payment-methods-for-client",
        method: "GET",
      }),
      providesTags: [tagTypes.payments],
    }),

    //  query fetched all deposit request
    getAllDepositRequest: builder.query({
      query: () => ({
        url: "/deposit/get-single-better-by-all-better-deposit-request",
        method: "GET",
      }),
      providesTags: [tagTypes.payments],
    }),

    //  query for   better deposit  by id
    GetSingleBetterDepositById: builder.query({
      query: (id) => ({
        url: `/deposit/deposit-log-by-id/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.payments],
    }),
  }),
});

export const {
  useCreateDepositMutation,
  useGetAllPaymentMethodsQuery,
  useGetPaymentTypeQuery,
  useGetAllDepositRequestQuery,
  useGetSingleBetterDepositByIdQuery,
} = paymentApi;
