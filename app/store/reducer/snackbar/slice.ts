import type { AlertColor } from '@mui/material';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type StateProps = {
  message: string;
  type: AlertColor;
  open: true | false;
};

type OpenSnackbarProps = Omit<StateProps, 'open'>;

const initialState: StateProps = {
  open: false,
  type: 'success',
  message: '',
};

const snackbarSlice = createSlice({
  name: 'snackbarReducer',
  initialState,
  reducers: {
    openSnackbar: (
      state: StateProps,
      action: PayloadAction<OpenSnackbarProps>
    ) => ({
      ...state,
      open: true,
      type: action.payload.type,
      message: action.payload.message,
    }),
    closeSnackbar: (state: StateProps) => ({
      ...state,
      open: false,
    }),
    resetSnackbar: (state: StateProps) => ({
      ...state,
      ...initialState,
    }),
  },
});

export const { openSnackbar, closeSnackbar, resetSnackbar } =
  snackbarSlice.actions;
export default snackbarSlice;
