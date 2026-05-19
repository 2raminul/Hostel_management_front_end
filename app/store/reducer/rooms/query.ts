import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

import { getLocalhostURL } from "../../../config";
import { getToken } from "../../../utils/helpers";
import { CustomError } from "../../../utils/types";
import { AddBedType, AddRoomType, Bed, Room, RoomDetail } from "./types";

export const roomsApi = createApi({
  reducerPath: "roomsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getLocalhostURL()}/rooms`,
    prepareHeaders: async (headers) => {
      const token = await getToken();
      headers.set("authorization", token);
      return headers;
    },
  }) as BaseQueryFn<string | FetchArgs, unknown, CustomError, unknown>,
  tagTypes: ["room-list", "room-detail", "bed-detail"],
  endpoints: (builder) => ({
    // ─── Mutations ─────────────────────────────────────────────
    addRoom: builder.mutation<{ id: number }, AddRoomType>({
      query: (body) => ({ url: "/", method: "POST", body }),
      invalidatesTags: ["room-list"],
    }),
    updateRoom: builder.mutation<void, Partial<AddRoomType> & { id: number }>({
      query: ({ id, ...body }) => ({ url: `/${id}`, method: "PATCH", body }),
      invalidatesTags: ["room-list", "room-detail"],
    }),
    deleteRoom: builder.mutation<void, number>({
      query: (id) => ({ url: `/${id}`, method: "DELETE" }),
      invalidatesTags: ["room-list"],
    }),
    addBed: builder.mutation<{ id: number }, AddBedType>({
      query: (body) => ({ url: "/beds", method: "POST", body }),
      invalidatesTags: ["room-detail"],
    }),
    updateBed: builder.mutation<void, Partial<AddBedType> & { id: number }>({
      query: ({ id, ...body }) => ({ url: `/beds/${id}`, method: "PATCH", body }),
      invalidatesTags: ["room-detail", "bed-detail"],
    }),
    deleteBed: builder.mutation<void, number>({
      query: (id) => ({ url: `/beds/${id}`, method: "DELETE" }),
      invalidatesTags: ["room-detail"],
    }),
    // ─── Queries ───────────────────────────────────────────────
    getRooms: builder.query<Room[], void>({
      query: () => "/",
      providesTags: ["room-list"],
    }),
    getRoomDetail: builder.query<RoomDetail, number>({
      query: (id) => `/${id}`,
      providesTags: ["room-detail"],
    }),
    getBedDetail: builder.query<Bed, number>({
      query: (id) => `/beds/${id}`,
      providesTags: ["bed-detail"],
    }),
  }),
});

export const {
  useAddRoomMutation,
  useUpdateRoomMutation,
  useDeleteRoomMutation,
  useAddBedMutation,
  useUpdateBedMutation,
  useDeleteBedMutation,
  useGetRoomsQuery,
  useGetRoomDetailQuery,
  useGetBedDetailQuery,
} = roomsApi;
