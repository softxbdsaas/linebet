import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const bannerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBanners: builder.query({
      query: (id) => ({
        url: `/auth/banners`,
        method: "GET",
      }),
      invalidatesTags: [tagTypes.withdraws],
    }),
  }),
});

export const { useGetAllBannersQuery } = bannerApi;
