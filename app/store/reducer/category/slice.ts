import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryFilterType } from "./types";

type StorageType = {
  categoryFilter: {
    page: number;
    perPage: number;
    name?: string;
    reusable?: string;
    isInventoryItem?: string;
    isSaleItem?: string;
    unit?: string;
  };
};

const initialState: StorageType = {
  categoryFilter: { page: 1, perPage: 10 },
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategoryPage: (state, action: PayloadAction<number>) => {
      state.categoryFilter.page = action.payload;
    },
    setCategoryPerPage: (state, action: PayloadAction<number>) => {
      state.categoryFilter.perPage = action.payload;
    },
    setCategoryFilter: (state, action: PayloadAction<CategoryFilterType>) => {
      state.categoryFilter.name = action.payload.name;
      state.categoryFilter.reusable = action.payload.reusable;
      state.categoryFilter.isInventoryItem = action.payload.isInventoryItem;
      state.categoryFilter.isSaleItem = action.payload.isSaleItem;
      state.categoryFilter.unit = action.payload.unit;
    },
  },
});

export const { setCategoryPage, setCategoryPerPage, setCategoryFilter } =
  categorySlice.actions;

export default categorySlice.reducer;
