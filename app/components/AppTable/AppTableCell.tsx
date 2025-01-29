import { TableCell } from "@mui/material";
import { FC, ReactNode } from "react";

export const AppTableCell: FC<{
  children?: ReactNode;
}> = ({ children }) => {
  return <TableCell>{children}</TableCell>;
};
