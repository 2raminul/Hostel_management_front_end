import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

import { getLocalhostURL } from "../../../config";
import { getToken } from "../../../utils/helpers";
import { CustomError } from "../../../utils/types";
import { CategoryQueryResponseType, CategoryQueryType } from "./types";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getLocalhostURL()}/category`,
    prepareHeaders: async (headers) => {
      const token = await getToken();
      headers.set("authorization", token);
      return headers;
    },
  }) as BaseQueryFn<string | FetchArgs, unknown, CustomError, unknown>,
  tagTypes: ["category-list", "unit-list"],
  endpoints: (builder) => ({
    // ============== Mutations ================
    addCategory: builder.mutation<any, any>({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["category-list", "unit-list"],
    }),
    // ============== Queries ==================
    getUnits: builder.query<string[], void>({
      query: () => "/units",
      providesTags: ["unit-list"],
    }),
    getCategoryList: builder.query<
      CategoryQueryResponseType,
      CategoryQueryType
    >({
      query: (params) => ({
        url: "/",
        params,
      }),
      providesTags: ["category-list"],
    }),
  }),
});
export const {
  useAddCategoryMutation,
  useGetUnitsQuery,
  useGetCategoryListQuery,
} = categoryApi;
