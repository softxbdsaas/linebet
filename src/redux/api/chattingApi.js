import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";
export const chattingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    seneMessage: builder.mutation({
      query: (data) => ({
        url: `/auth/create-message`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.chats],
    }),
    loadMessage: builder.query({
      query: (id) => ({
        url: `/auth/create-message/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.chats],
    }),
  }),
});

export const { useSeneMessageMutation, useLoadMessageQuery } = chattingApi;
