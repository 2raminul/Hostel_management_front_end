import {
  type Action,
  combineReducers,
  configureStore,
  type ThunkAction,
} from "@reduxjs/toolkit";

import { snackbarSlice } from "./reducer/snackbar";
import menuSlice from "./reducer/snackbar/menu/slice";
import { categoryApi } from "./reducer/category";
import { categorySlice } from "./reducer/category/slice";
import { expenseApi, expenseSlice } from "./reducer/expense";
import { inventoryApi } from "./reducer/inventory";
import { inventorySlice } from "./reducer/inventory/slice";
import { incomeApi, incomeSlice } from "./reducer/income";
import { roomsApi } from "./reducer/rooms";
import {
  bookingPlatformApi,
  bankInfoApi,
  onlineCardApi,
  settlementAccountsApi,
} from "./reducer/settings";
import { usersApi } from "./reducer/users";
import { reportsApi } from "./reducer/reports";
import { permissionsApi } from "./reducer/permissions";

const middlewares = [
  categoryApi.middleware,
  expenseApi.middleware,
  inventoryApi.middleware,
  incomeApi.middleware,
  roomsApi.middleware,
  bookingPlatformApi.middleware,
  bankInfoApi.middleware,
  onlineCardApi.middleware,
  settlementAccountsApi.middleware,
  usersApi.middleware,
  reportsApi.middleware,
  permissionsApi.middleware,
];

const rootReducer = combineReducers({
  [snackbarSlice.name]: snackbarSlice.reducer,
  [menuSlice.name]: menuSlice.reducer,
  [categoryApi.reducerPath]: categoryApi.reducer,
  [categorySlice.name]: categorySlice.reducer,
  [expenseApi.reducerPath]: expenseApi.reducer,
  [expenseSlice.name]: expenseSlice.reducer,
  [inventoryApi.reducerPath]: inventoryApi.reducer,
  [inventorySlice.name]: inventorySlice.reducer,
  [incomeApi.reducerPath]: incomeApi.reducer,
  [incomeSlice.name]: incomeSlice.reducer,
  [roomsApi.reducerPath]: roomsApi.reducer,
  [bookingPlatformApi.reducerPath]: bookingPlatformApi.reducer,
  [bankInfoApi.reducerPath]: bankInfoApi.reducer,
  [onlineCardApi.reducerPath]: onlineCardApi.reducer,
  [settlementAccountsApi.reducerPath]: settlementAccountsApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,
  [reportsApi.reducerPath]: reportsApi.reducer,
  [permissionsApi.reducerPath]: permissionsApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(...middlewares),
});

export type AppState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;
