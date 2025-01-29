import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#767674",
      light: "#00000026",
    },
    success: {
      main: "#00FF00",
    },
    secondary: {
      main: "#00000026",
      light: "#767674",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          color: "black",
          "&:hover": {
            backgroundColor: "inherit",
          },
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: "#767674",
          "&:hover": {
            backgroundColor: "#00000026",
          },
          "&.Mui-selected": {
            color: "#FFFFFF", // Text color for selected
            backgroundColor: "#D10D74", // Background color for selected
            borderColor: "#D10D74",
            "&:hover": {
              backgroundColor: "#D10D7426", // Hover effect for selected
              color: "black",
              borderColor: "#D10D74",
            },
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            backgroundColor: "#f3f3f3", // Your desired background color
            color: "#dadada", // Your desired text color (optional)
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff !important",
        },
      },
    },
    MuiFab: {
      defaultProps: {
        color: "primary",
        size: "small",
      },
      styleOverrides: {
        root: {
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.3)",
          },
        },
      },
    },
  },
});

export const iconStyles = {
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    transform: "scale(1.3)",
  },
};
