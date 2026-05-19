import CloseIcon from "@mui/icons-material/Close";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
} from "@mui/material";
import { FC, ReactNode } from "react";

import AppButton from "../AppButton";

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
  /**
   * MUI Dialog `maxWidth` — default `lg` (~1200px) for consistent form modals.
   * Use `sm` for short confirmations (e.g. delete reason only).
   */
  dialogMaxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
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
  dialogMaxWidth = "lg",
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth={dialogMaxWidth === false ? false : dialogMaxWidth}
      scroll="paper"
      transitionDuration={0}
      TransitionProps={{ appear: false, timeout: 0 }}
      BackdropProps={{
        sx: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          /* Theme also sets transition: none on MuiBackdrop */
        },
      }}
      PaperProps={{
        elevation: 8,
        sx: (theme) => ({
          backgroundColor: theme.palette.background.paper,
          margin: { xs: 2, sm: "auto" },
          maxHeight: { xs: "calc(100% - 32px)", sm: "calc(100% - 64px)" },
        }),
      }}
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
      <DialogContent
        sx={{
          width: "100%",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        {children != null ? (
          children
        ) : content != null ? (
          <DialogContentText>{content}</DialogContentText>
        ) : null}
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
