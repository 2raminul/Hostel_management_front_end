import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

import { getLocalhostURL } from "../../../config";
import { getToken } from "../../../utils/helpers";
import { CustomError } from "../../../utils/types";

export type ReportPeriod = { dateFrom: string | null; dateTo: string | null };

export type FinancialReport = {
  reportType: "financial";
  period: ReportPeriod;
  income: { totalAmount: number; entryCount: number };
  expense: { totalAmount: number; entryCount: number };
  net: number;
};

export type IncomeReportRow = {
  id: number;
  amount: number;
  incomeDate: string;
  remarks: string | null;
  bedLabel: string;
  roomNumber: string;
  paymentMethod: string;
  bookingPlatform: string | null;
};

export type IncomeReport = {
  reportType: "income";
  period: ReportPeriod;
  filters: {
    paymentMethodId: number | null;
    paymentMethodName: string | null;
    bookingPlatformId: number | null;
    bookingPlatformName: string | null;
    directBookingOnly: boolean;
  };
  summary: { totalAmount: number; entryCount: number };
  rows: IncomeReportRow[];
};

export type ExpenseReportRow = {
  id: number;
  categoryId: number;
  categoryName: string;
  brand: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  expenseDate: string;
  remarks: string | null;
};

export type ExpenseReport = {
  reportType: "expense";
  period: ReportPeriod;
  filters: {
    categoryId: number | null;
    categoryName: string | null;
  };
  summary: { totalAmount: number; entryCount: number };
  rows: ExpenseReportRow[];
};

export type IncomeReportQueryArgs = {
  dateFrom?: string;
  dateTo?: string;
  paymentMethodId?: number;
  bookingPlatformId?: number;
  directBookingOnly?: boolean;
};

export type ExpenseReportQueryArgs = {
  dateFrom?: string;
  dateTo?: string;
  categoryId?: number;
};

export type SettlementBalanceRow = {
  settlementAccountId: number;
  name: string;
  accountKind: string;
  incomeTotal: number;
  expenseTotal: number;
  net: number;
};

export type SettlementBalancesReport = {
  period: ReportPeriod;
  accounts: SettlementBalanceRow[];
};

export const reportsApi = createApi({
  reducerPath: "reportsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getLocalhostURL()}/reports`,
    prepareHeaders: async (headers) => {
      const token = await getToken();
      headers.set("authorization", token);
      return headers;
    },
  }) as BaseQueryFn<string | FetchArgs, unknown, CustomError, unknown>,
  endpoints: (builder) => ({
    getFinancialReport: builder.query<
      FinancialReport,
      { dateFrom?: string; dateTo?: string }
    >({
      query: (params) => ({ url: "/financial", params }),
    }),
    getIncomeReport: builder.query<IncomeReport, IncomeReportQueryArgs>({
      query: (params) => {
        const { paymentMethodId, bookingPlatformId, directBookingOnly, ...rest } =
          params;
        return {
          url: "/income",
          params: {
            ...rest,
            ...(paymentMethodId != null ? { paymentMethodId } : {}),
            ...(bookingPlatformId != null ? { bookingPlatformId } : {}),
            ...(directBookingOnly ? { directBookingOnly: true } : {}),
          },
        };
      },
    }),
    getExpenseReport: builder.query<ExpenseReport, ExpenseReportQueryArgs>({
      query: (params) => ({
        url: "/expense",
        params: {
          dateFrom: params.dateFrom,
          dateTo: params.dateTo,
          ...(params.categoryId != null ? { categoryId: params.categoryId } : {}),
        },
      }),
    }),
    getSettlementBalances: builder.query<
      SettlementBalancesReport,
      { dateFrom?: string; dateTo?: string }
    >({
      query: (params) => ({ url: "/settlement-balances", params }),
    }),
  }),
});

export const {
  useGetFinancialReportQuery,
  useGetIncomeReportQuery,
  useGetExpenseReportQuery,
  useGetSettlementBalancesQuery,
} = reportsApi;
