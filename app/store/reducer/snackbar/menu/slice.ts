import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type StateProps = { expandedParentText: string };

const initialState: StateProps = {
  expandedParentText: "",
};

const menuSlice = createSlice({
  name: "menuReducer",
  initialState,
  reducers: {
    setExpandedParentText: (
      state: StateProps,
      action: PayloadAction<string>
    ) => ({
      ...state,
      expandedParentText: action.payload,
    }),
  },
});

export const { setExpandedParentText } = menuSlice.actions;

export default menuSlice;
