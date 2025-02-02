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

const middlewares = [categoryApi.middleware, expenseApi.middleware];

const rootReducer = combineReducers({
  [snackbarSlice.name]: snackbarSlice.reducer,
  [menuSlice.name]: menuSlice.reducer,
  [categoryApi.reducerPath]: categoryApi.reducer,
  [categorySlice.name]: categorySlice.reducer,
  [expenseApi.reducerPath]: expenseApi.reducer,
  [expenseSlice.name]: expenseSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(...middlewares),
});

//export type AppDispatch = AppStore["dispatch"];
//export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;
//export const wrapper = createWrapper<AppStore>(makeStore);
