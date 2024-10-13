import { baseApi } from "./baseApi";

const bannerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBanners: builder.query({
      query: (id) => ({
        url: `/auth/banners`,
        method: "GET",
      }),
      invalidatesTags: ["banners"],
    }),
  }),
});

export const { useGetAllBannersQuery } = bannerApi;
