import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InventoryFilterType } from "./types";

type StorageType = {
  inventoryFilter: {
    page: number;
    perPage: number;
    categoryId?: number;
    brand?: string;
  };
};

const initialState: StorageType = {
  inventoryFilter: { page: 1, perPage: 10 },
};

export const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    setInventoryPage: (state, action: PayloadAction<number>) => {
      state.inventoryFilter.page = action.payload;
    },
    setInventoryPerPage: (state, action: PayloadAction<number>) => {
      state.inventoryFilter.perPage = action.payload;
    },
    setInventoryFilter: (
      state,
      action: PayloadAction<{ categoryId?: number; brand?: string }>
    ) => {
      state.inventoryFilter.categoryId = action.payload.categoryId;
      state.inventoryFilter.brand = action.payload.brand;
    },
  },
});

export const { setInventoryPage, setInventoryPerPage, setInventoryFilter } =
  inventorySlice.actions;

export default inventorySlice.reducer;
