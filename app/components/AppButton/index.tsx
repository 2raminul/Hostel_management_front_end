import { Button, ButtonProps } from "@mui/material";

const AppButton = ({ children, ...rest }: ButtonProps) => (
  <Button
    disableRipple
    disableElevation
    size="small"
    sx={{
      "&:hover": { backgroundColor: "#767674", color: "#ffffff" },
      color: "black",
      backgroundColor: "#E2E2E2",
      borderColor: "#767674",
      borderRadius: "0.25rem",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
      "&.MuiButton-contained": {
        color: "black",
        backgroundColor: "#E2E2E2",
        "&:hover": {
          // Hover effect for contained variant
          backgroundColor: "#767674", // Change background color on hover
          color: "#ffffff", // Change text color on hover
        },
      },
      "&.MuiButton-outlined": {
        color: "black",
        backgroundColor: "white",
        "&:hover": {
          // Hover effect for contained variant
          backgroundColor: "#767674", // Change background color on hover
          color: "#ffffff", // Change text color on hover
          borderColor: "#767674",
        },
      },
    }}
    {...rest}
  >
    {children}
  </Button>
);

export default AppButton;
