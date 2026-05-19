import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

import { getLocalhostURL } from "../../../config";
import { getToken } from "../../../utils/helpers";
import { CustomError } from "../../../utils/types";
import {
  AddIncomeEntryType,
  DailyIncomeSummary,
  IncomeEntry,
  IncomeQueryResponseType,
  IncomeQueryType,
  PaymentMethod,
} from "./types";

export const incomeApi = createApi({
  reducerPath: "incomeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getLocalhostURL()}/income`,
    prepareHeaders: async (headers) => {
      const token = await getToken();
      headers.set("authorization", token);
      return headers;
    },
  }) as BaseQueryFn<string | FetchArgs, unknown, CustomError, unknown>,
  tagTypes: ["income-list", "income-detail", "payment-methods", "daily-summary"],
  endpoints: (builder) => ({
    // ─── Mutations ─────────────────────────────────────────────
    addIncomeEntry: builder.mutation<{ id: number }, AddIncomeEntryType>({
      query: (body) => ({ url: "/entries", method: "POST", body }),
      invalidatesTags: ["income-list", "daily-summary"],
    }),
    updateIncomeEntry: builder.mutation<void, Partial<AddIncomeEntryType> & { id: number }>({
      query: ({ id, ...body }) => ({ url: `/entries/${id}`, method: "PATCH", body }),
      invalidatesTags: ["income-list", "income-detail", "daily-summary"],
    }),
    deleteIncomeEntry: builder.mutation<void, number>({
      query: (id) => ({ url: `/entries/${id}`, method: "DELETE" }),
      invalidatesTags: ["income-list", "daily-summary"],
    }),
    addPaymentMethod: builder.mutation<{ id: number }, { name: string; description?: string }>({
      query: (body) => ({ url: "/payment-methods", method: "POST", body }),
      invalidatesTags: ["payment-methods"],
    }),
    // ─── Queries ───────────────────────────────────────────────
    getIncomeList: builder.query<IncomeQueryResponseType, IncomeQueryType>({
      query: (params) => ({ url: "/entries", params }),
      providesTags: ["income-list"],
    }),
    getIncomeDetail: builder.query<IncomeEntry, number>({
      query: (id) => `/entries/${id}`,
      providesTags: ["income-detail"],
    }),
    getPaymentMethods: builder.query<PaymentMethod[], void>({
      query: () => "/payment-methods",
      providesTags: ["payment-methods"],
    }),
    getDailySummary: builder.query<DailyIncomeSummary[], { date?: string; roomId?: number }>({
      query: (params) => ({ url: "/daily-summary", params }),
      providesTags: ["daily-summary"],
    }),
    getIncomeSummary: builder.query<
      { totalAmount: number; entryCount: number },
      {
        dateFrom?: string;
        dateTo?: string;
        paymentMethodId?: number;
        bookingPlatformId?: number;
        directBookingOnly?: boolean;
      }
    >({
      query: (params) => {
        const {
          paymentMethodId,
          bookingPlatformId,
          directBookingOnly,
          ...rest
        } = params;
        return {
          url: "/summary",
          params: {
            ...rest,
            ...(paymentMethodId != null ? { paymentMethodId } : {}),
            ...(bookingPlatformId != null ? { bookingPlatformId } : {}),
            ...(directBookingOnly ? { directBookingOnly: true } : {}),
          },
        };
      },
    }),
  }),
});

export const {
  useAddIncomeEntryMutation,
  useUpdateIncomeEntryMutation,
  useDeleteIncomeEntryMutation,
  useAddPaymentMethodMutation,
  useGetIncomeListQuery,
  useGetIncomeDetailQuery,
  useGetPaymentMethodsQuery,
  useGetDailySummaryQuery,
  useGetIncomeSummaryQuery,
} = incomeApi;
