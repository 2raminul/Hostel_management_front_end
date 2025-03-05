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
  InventoryItemData,
  InventoryQueryResponseType,
  InventoryQueryType,
} from "./types";

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
    decreaseFromInventoryDueToUsage: builder.mutation<any, any>({
      query: (body) => ({
        url: "/decrease-due-to-usage",
        method: "POST",
        body,
      }),
      invalidatesTags: ["inventory-list"],
    }),
    decreaseFromInventoryDueToSale: builder.mutation<any, any>({
      query: (body) => ({
        url: "/decrease-due-to-sale",
        method: "POST",
        body,
      }),
      invalidatesTags: ["inventory-list"],
    }),
    updateReusableCount: builder.mutation<any, any>({
      query: (body) => ({
        url: "/update-reusable-count",
        method: "POST",
        body,
      }),
      invalidatesTags: ["inventory-list"],
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
    getInventoryDetail: builder.query<InventoryItemData, number>({
      query: (id) => `/detail/${id}`,
    }),
    getBrands: builder.query<string[], void>({
      query: () => "/brands",
      providesTags: ["brand-list"],
    }),
  }),
});
export const {
  useAddToIventoryMutation,
  useDecreaseFromInventoryDueToUsageMutation,
  useDecreaseFromInventoryDueToSaleMutation,
  useUpdateReusableCountMutation,
  useGetInventoryListQuery,
  useGetInventoryDetailQuery,
  useGetBrandsQuery,
} = inventoryApi;
