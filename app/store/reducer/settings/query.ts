import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

import { getLocalhostURL } from "../../../config";
import { getToken } from "../../../utils/helpers";
import { CustomError } from "../../../utils/types";
import { BankInfo, BookingPlatform, OnlineCard, SettlementAccount } from "./types";

// ============== Booking Platform API ==============
export const bookingPlatformApi = createApi({
  reducerPath: "bookingPlatformApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getLocalhostURL()}/settings/booking-platforms`,
    prepareHeaders: async (headers) => {
      const token = await getToken();
      headers.set("authorization", token);
      return headers;
    },
  }) as BaseQueryFn<string | FetchArgs, unknown, CustomError, unknown>,
  tagTypes: ["booking-platform-list"],
  endpoints: (builder) => ({
    // ============== Mutations ================
    addBookingPlatform: builder.mutation<void, { name: string; status?: boolean }>({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["booking-platform-list"],
    }),
    updateBookingPlatform: builder.mutation<void, { id: number; name?: string; status?: boolean }>({
      query: ({ id, ...body }) => ({
        url: `/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["booking-platform-list"],
    }),
    deleteBookingPlatform: builder.mutation<void, number>({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["booking-platform-list"],
    }),
    // ============== Queries ==================
    getBookingPlatforms: builder.query<BookingPlatform[], void>({
      query: () => "/",
      providesTags: ["booking-platform-list"],
    }),
  }),
});

export const {
  useAddBookingPlatformMutation,
  useUpdateBookingPlatformMutation,
  useDeleteBookingPlatformMutation,
  useGetBookingPlatformsQuery,
} = bookingPlatformApi;

// ============== Bank Info API ==============
export const bankInfoApi = createApi({
  reducerPath: "bankInfoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getLocalhostURL()}/settings/bank-info`,
    prepareHeaders: async (headers) => {
      const token = await getToken();
      headers.set("authorization", token);
      return headers;
    },
  }) as BaseQueryFn<string | FetchArgs, unknown, CustomError, unknown>,
  tagTypes: ["bank-info-list"],
  endpoints: (builder) => ({
    // ============== Mutations ================
    addBankInfo: builder.mutation<void, { accountNumber?: string; status?: boolean }>({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["bank-info-list"],
    }),
    updateBankInfo: builder.mutation<void, { id: number; accountNumber?: string; status?: boolean }>({
      query: ({ id, ...body }) => ({
        url: `/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["bank-info-list"],
    }),
    deleteBankInfo: builder.mutation<void, number>({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["bank-info-list"],
    }),
    // ============== Queries ==================
    getBankInfoList: builder.query<BankInfo[], void>({
      query: () => "/",
      providesTags: ["bank-info-list"],
    }),
  }),
});

export const {
  useAddBankInfoMutation,
  useUpdateBankInfoMutation,
  useDeleteBankInfoMutation,
  useGetBankInfoListQuery,
} = bankInfoApi;

// ============== Online Card API ==============
export const onlineCardApi = createApi({
  reducerPath: "onlineCardApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getLocalhostURL()}/settings/online-cards`,
    prepareHeaders: async (headers) => {
      const token = await getToken();
      headers.set("authorization", token);
      return headers;
    },
  }) as BaseQueryFn<string | FetchArgs, unknown, CustomError, unknown>,
  tagTypes: ["online-card-list"],
  endpoints: (builder) => ({
    // ============== Mutations ================
    addOnlineCard: builder.mutation<void, { name: string; bankId?: number; cardNumber?: number; status?: boolean }>({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["online-card-list"],
    }),
    updateOnlineCard: builder.mutation<void, { id: number; name?: string; bankId?: number; cardNumber?: number; status?: boolean }>({
      query: ({ id, ...body }) => ({
        url: `/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["online-card-list"],
    }),
    deleteOnlineCard: builder.mutation<void, number>({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["online-card-list"],
    }),
    // ============== Queries ==================
    getOnlineCards: builder.query<OnlineCard[], void>({
      query: () => "/",
      providesTags: ["online-card-list"],
    }),
  }),
});

export const {
  useAddOnlineCardMutation,
  useUpdateOnlineCardMutation,
  useDeleteOnlineCardMutation,
  useGetOnlineCardsQuery,
} = onlineCardApi;

// ============== Settlement accounts (cash position tagging) ==============
export const settlementAccountsApi = createApi({
  reducerPath: "settlementAccountsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getLocalhostURL()}/settings/settlement-accounts`,
    prepareHeaders: async (headers) => {
      const token = await getToken();
      headers.set("authorization", token);
      return headers;
    },
  }) as BaseQueryFn<string | FetchArgs, unknown, CustomError, unknown>,
  tagTypes: ["settlement-accounts-list"],
  endpoints: (builder) => ({
    getSettlementAccounts: builder.query<SettlementAccount[], void>({
      query: () => "/",
      providesTags: ["settlement-accounts-list"],
    }),
  }),
});

export const { useGetSettlementAccountsQuery } = settlementAccountsApi;
