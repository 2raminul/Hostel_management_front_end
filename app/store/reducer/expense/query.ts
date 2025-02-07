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
  AddExpensePropsType,
  EditExpensePropsType,
  Expense,
  ExpenseHistoryQueryResponseType,
  ExpenseQueryResponseType,
  ExpenseQueryType,
} from "./types";

export const expenseApi = createApi({
  reducerPath: "expenseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getLocalhostURL()}/expense`,
    prepareHeaders: async (headers) => {
      const token = await getToken();
      headers.set("authorization", token);
      return headers;
    },
  }) as BaseQueryFn<string | FetchArgs, unknown, CustomError, unknown>,
  tagTypes: ["brand-list", "expense-list", "expense-detail", "expense-history"],
  endpoints: (builder) => ({
    // ============== Mutations ================
    addExpense: builder.mutation<void, AddExpensePropsType>({
      query: (body) => ({
        url: "/add-expense",
        method: "POST",
        body,
      }),
      invalidatesTags: ["brand-list", "expense-list"],
    }),
    editExpense: builder.mutation<void, EditExpensePropsType>({
      query: (body) => ({
        url: "/edit-expense",
        method: "PUT",
        body,
      }),
      invalidatesTags: [
        "brand-list",
        "expense-list",
        "expense-detail",
        "expense-history",
      ],
    }),
    // ============== Queries ==================
    getExpenseList: builder.query<ExpenseQueryResponseType, ExpenseQueryType>({
      query: (params) => ({ url: "/expense-list", params }),
      providesTags: ["expense-list"],
    }),
    getExpenseHistory: builder.query<ExpenseHistoryQueryResponseType, number>({
      query: (id) => `/expense-history/${id}`,
      providesTags: ["expense-history"],
    }),
    getBrands: builder.query<string[], void>({
      query: () => "/brands",
      providesTags: ["brand-list"],
    }),
    getExpenseDetail: builder.query<Expense, number>({
      query: (id) => `/${id}`,
      providesTags: ["expense-detail"],
    }),
  }),
});
export const {
  useGetExpenseListQuery,
  useGetExpenseDetailQuery,
  useGetExpenseHistoryQuery,
  useEditExpenseMutation,
  useGetBrandsQuery,
  useAddExpenseMutation,
} = expenseApi;
