import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

import { getLocalhostURL } from "../../../config";
import { getToken } from "../../../utils/helpers";
import { CustomError } from "../../../utils/types";

export type ModuleAccess = {
  view: boolean;
  edit: boolean;
  delete: boolean;
};

export type PermissionsMeResponse = {
  userId: number;
  isAdmin: boolean;
  permissions: Record<string, ModuleAccess>;
};

export const permissionsApi = createApi({
  reducerPath: "permissionsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getLocalhostURL()}/permissions`,
    prepareHeaders: async (headers) => {
      const token = await getToken();
      headers.set("authorization", token);
      return headers;
    },
  }) as BaseQueryFn<string | FetchArgs, unknown, CustomError, unknown>,
  tagTypes: ["permissions"],
  endpoints: (builder) => ({
    getModules: builder.query<{ modules: string[] }, void>({
      query: () => "/modules",
    }),
    getMyPermissions: builder.query<PermissionsMeResponse, void>({
      query: () => "/me",
      providesTags: ["permissions"],
    }),
    getUserPermissions: builder.query<
      { userId: number; permissions: Record<string, ModuleAccess>; rows: unknown[] },
      number
    >({
      query: (userId) => `/user/${userId}`,
      providesTags: ["permissions"],
    }),
    updateUserPermissions: builder.mutation<
      Record<string, ModuleAccess>,
      { userId: number; modules: Record<string, Partial<ModuleAccess>> }
    >({
      query: ({ userId, modules }) => ({
        url: `/user/${userId}`,
        method: "PUT",
        body: { modules },
      }),
      invalidatesTags: ["permissions"],
    }),
  }),
});

export const {
  useGetModulesQuery,
  useGetMyPermissionsQuery,
  useGetUserPermissionsQuery,
  useUpdateUserPermissionsMutation,
} = permissionsApi;
