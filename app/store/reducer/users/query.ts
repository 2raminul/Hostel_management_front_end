import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

import { getLocalhostURL } from "../../../config";
import { getToken } from "../../../utils/helpers";
import { CustomError } from "../../../utils/types";
import { CreateUserPayload, User } from "./types";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getLocalhostURL()}/users`,
    prepareHeaders: async (headers) => {
      const token = await getToken();
      headers.set("authorization", token);
      return headers;
    },
  }) as BaseQueryFn<string | FetchArgs, unknown, CustomError, unknown>,
  tagTypes: ["user-list"],
  endpoints: (builder) => ({
    // ============== Mutations ================
    createUser: builder.mutation<void, CreateUserPayload>({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["user-list"],
    }),
    updateUser: builder.mutation<void, { id: number } & Partial<CreateUserPayload>>({
      query: ({ id, ...body }) => ({
        url: `/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["user-list"],
    }),
    deactivateUser: builder.mutation<void, number>({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["user-list"],
    }),
    // ============== Queries ==================
    getUsers: builder.query<User[], void>({
      query: () => "/",
      providesTags: ["user-list"],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeactivateUserMutation,
  useGetUsersQuery,
} = usersApi;
