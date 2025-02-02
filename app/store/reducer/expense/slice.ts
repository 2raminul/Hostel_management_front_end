import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExpenseFilterType } from "./types";

type StorageType = {
  expenseFilter: {
    page: number;
    perPage: number;
    categoryId?: number;
    brand?: string;
    purchaseDateBefore?: Date;
    purchaseDateAfter?: Date;
  };
};

const initialState: StorageType = {
  expenseFilter: { page: 1, perPage: 10 },
};

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    setExpensePage: (state, action: PayloadAction<number>) => {
      state.expenseFilter.page = action.payload;
    },
    setExpensePerPage: (state, action: PayloadAction<number>) => {
      state.expenseFilter.perPage = action.payload;
    },
    setExpenseFilter: (state, action: PayloadAction<ExpenseFilterType>) => {
      state.expenseFilter.categoryId = action.payload.categoryId;
      state.expenseFilter.brand = action.payload.brand;
      state.expenseFilter.purchaseDateBefore =
        action.payload.purchaseDateBefore;
      state.expenseFilter.purchaseDateAfter = action.payload.purchaseDateAfter;
    },
  },
});

export const { setExpensePage, setExpensePerPage, setExpenseFilter } =
  expenseSlice.actions;

export default expenseSlice.reducer;
