import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

import { getLocalhostURL } from "../../../config";
import { getToken } from "../../../utils/helpers";
import { CustomError } from "../../../utils/types";
import { InventoryQueryResponseType, InventoryQueryType } from "./types";

export const inventoryApi = createApi({
  reducerPath: "inventoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getLocalhostURL()}/inventory`,
    prepareHeaders: async (headers) => {
      const token = await getToken();
      headers.set("authorization", token);
      return headers;
    },
  }) as BaseQueryFn<string | FetchArgs, unknown, CustomError, unknown>,
  tagTypes: ["inventory-list", "brand-list"],
  endpoints: (builder) => ({
    // ============== Mutations ================
    addToIventory: builder.mutation<any, any>({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["inventory-list", "brand-list"],
    }),
    // ============== Queries ==================
    getInventoryList: builder.query<
      InventoryQueryResponseType,
      InventoryQueryType
    >({
      query: (params) => ({
        url: "/items-list",
        params,
      }),
      providesTags: ["inventory-list"],
    }),
    getBrands: builder.query<string[], void>({
      query: () => "/brands",
      providesTags: ["brand-list"],
    }),
  }),
});
export const {
  useAddToIventoryMutation,
  useGetInventoryListQuery,
  useGetBrandsQuery,
} = inventoryApi;
