"use client";

import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

/** Shown while `next/dynamic` loads a modal form chunk — same surface as dialog paper (no grey “second modal”). */
export function ModalFormLoadingFallback() {
  return (
    <Box
      sx={{
        minHeight: 200,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.paper",
        borderRadius: 1,
      }}
    >
      <CircularProgress size={36} thickness={4} sx={{ color: "grey.500" }} />
    </Box>
  );
}
