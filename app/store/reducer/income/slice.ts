import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IncomeFilterType } from "./types";

type StorageType = {
  incomeFilter: {
    page: number;
    perPage: number;
    roomId?: number;
    bedId?: number;
    dateFrom?: string;
    dateTo?: string;
  };
};

const initialState: StorageType = {
  incomeFilter: { page: 1, perPage: 10 },
};

export const incomeSlice = createSlice({
  name: "income",
  initialState,
  reducers: {
    setIncomePage: (state, action: PayloadAction<number>) => {
      state.incomeFilter.page = action.payload;
    },
    setIncomePerPage: (state, action: PayloadAction<number>) => {
      state.incomeFilter.perPage = action.payload;
    },
    setIncomeFilter: (state, action: PayloadAction<IncomeFilterType>) => {
      state.incomeFilter.roomId = action.payload.roomId;
      state.incomeFilter.bedId = action.payload.bedId;
      state.incomeFilter.dateFrom = action.payload.dateFrom;
      state.incomeFilter.dateTo = action.payload.dateTo;
    },
  },
});

export const { setIncomePage, setIncomePerPage, setIncomeFilter } = incomeSlice.actions;
export default incomeSlice.reducer;
