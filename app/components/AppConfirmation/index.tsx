import CloseIcon from "@mui/icons-material/Close";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { FC, ReactNode } from "react";

import AppButton from "../AppButton";
import { theme } from "../ThemeRegistry/theme";

export const AppConfirmation: FC<{
  open: boolean;
  title: string;
  closeButtonHidden?: boolean;
  content?: string;
  disabled?: boolean;
  handleClose: () => void;
  handleSubmit?: () => void;
  viewOnly?: boolean;
  children?: ReactNode;
}> = ({
  open,
  handleClose,
  handleSubmit,
  title,
  content,
  disabled,
  closeButtonHidden,
  children,
  viewOnly,
}) => {
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      maxWidth="xl"
    >
      <DialogTitle>{title}</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={(theme) => ({
          position: "absolute",
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>
      <Divider />
      <DialogContent>
        <DialogContentText>{children ? children : content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        {!closeButtonHidden && (
          <AppButton onClick={handleClose} variant="outlined">
            Close
          </AppButton>
        )}
        {!viewOnly && (
          <AppButton
            onClick={handleSubmit}
            variant="contained"
            disabled={disabled}
          >
            Submit
          </AppButton>
        )}
      </DialogActions>
    </Dialog>
  );
};
