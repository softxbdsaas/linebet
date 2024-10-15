import { baseApi } from "./baseApi";

const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createDeposit: builder.mutation({
      query: (data) => ({
        url: `/deposit/better-deposit-request`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["payments"],
    }),

    getPaymentType: builder.query({
      query: () => ({
        url: "/payment/get-all-payment-types-for-client",
        method: "GET",
      }),
      providesTags: ["payments"],
    }),
    //    get all payment methods
    getAllPaymentMethods: builder.query({
      query: () => ({
        url: "/payment/get-all-payment-methods-for-client",
        method: "GET",
      }),
      providesTags: ["payments"],
    }),

    getAllDepositRequest: builder.query({
      query: () => ({
        url: "/deposit/get-single-better-by-all-better-deposit-request",
        method: "GET",
      }),
      providesTags: ["payments"],
    }),

    getAllWithdrawRequest: builder.query({
      query: () => ({
        url: "/deposit/get-single-better-by-all-better-withdraw-request",
        method: "GET",
      }),
      providesTags: ["payments"],
    }),
  }),
});

export const {
  useCreateDepositMutation,
  useGetAllPaymentMethodsQuery,
  useGetPaymentTypeQuery,
  useGetAllDepositRequestQuery,
  useGetAllWithdrawRequestQuery,
} = paymentApi;
