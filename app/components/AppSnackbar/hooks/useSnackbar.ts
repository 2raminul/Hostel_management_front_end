import type { AlertColor } from "@mui/material";

import { useDispatch } from "../../../store/hooks";
import { openSnackbar, resetSnackbar } from "../../../store/reducer/snackbar";

const useSnackbar = () => {
  const dispatch = useDispatch();

  const show = (message: string, severity: AlertColor) => {
    dispatch(openSnackbar({ message: message, type: severity }));
  };

  const closeSnackbar = () => {
    dispatch(resetSnackbar());
  };

  const info = (message: string) => show(message, "info");
  const success = (message: string) => show(message, "success");
  const warning = (message: string) => show(message, "warning");
  const error = (message: string) => show(message, "error");

  return {
    show,
    info,
    success,
    warning,
    error,
    closeSnackbar,
  };
};

export type UseSnackbarProps = ReturnType<typeof useSnackbar>;
export default useSnackbar;
