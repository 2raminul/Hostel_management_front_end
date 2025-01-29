import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import ErrorIcon from "@mui/icons-material/Error";
import { IconButton, Snackbar } from "@mui/material";
import { FC } from "react";

import { useDispatch, useSelector } from "../../store/hooks";
import { closeSnackbar } from "../../store/reducer/snackbar";

const AppSnackbar: FC = () => {
  const dispatch = useDispatch();
  const { open, type, message } = useSelector((state) => state.snackbarReducer);

  const handleClose = () => {
    dispatch(closeSnackbar());
  };

  const getIcon = () => {
    switch (type) {
      case "success":
        return <DoneIcon />;
      case "error":
        return <ErrorIcon sx={{ color: "error.main" }} />;
      default:
        return <DoneIcon />;
    }
  };

  return (
    <Snackbar
      className={`rounded-lg shadow-2xl max-w-sm ${
        type === "error" ? "bg-error-150" : "bg-success-150"
      }`}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <div className={`flex p-6`}>
        <div className="flex">{getIcon()}</div>
        <div className="text-lg m-auto ml-5 flex-grow items-center align-middle whitespace-pre-wrap">
          {message}
        </div>
        <div className="justify-items-start">
          <IconButton disableRipple onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </div>
      </div>
    </Snackbar>
  );
};

export default AppSnackbar;
