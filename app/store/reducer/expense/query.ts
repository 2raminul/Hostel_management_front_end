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
  tagTypes: ["brand-list", "expense-list"],
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
    // ============== Queries ==================
    getExpenseList: builder.query<ExpenseQueryResponseType, ExpenseQueryType>({
      query: (params) => ({ url: "/expense-list", params }),
      providesTags: ["expense-list"],
    }),
    getBrands: builder.query<string[], void>({
      query: () => "/brands",
      providesTags: ["brand-list"],
    }),
  }),
});
export const {
  useGetExpenseListQuery,
  useGetBrandsQuery,
  useAddExpenseMutation,
} = expenseApi;
